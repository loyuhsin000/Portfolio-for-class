/* Essential interaction only: bilingual text and selected project metadata. */
(function(){'use strict';
 let content=window.PORTFOLIO_CONTENT||{translations:{en:{},zh:{}},projects:[]};
 const choose=()=>{try{return localStorage.getItem('portfolio-language')==='zh'?'zh':'en'}catch(e){return 'en'}};
 let lang=choose();
 function apply(next){
   lang=next==='zh'?'zh':'en'; document.documentElement.lang=lang==='en'?'en':'zh-Hant';
   document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;const value=content.translations?.[lang]?.[k];if(typeof value==='string'){
     if(k==='home.identity'){
       // Keep the second ornament in the translated identity line orange in both languages.
       // Build text nodes instead of injecting unsanitized HTML from translations.
       const bits=value.split('✦');
       if(bits.length===2){
         const star=document.createElement('span');star.className='identity-star';star.textContent='✦';star.setAttribute('aria-hidden','true');
         el.replaceChildren(document.createTextNode(bits[0].trimEnd()+' '),star,document.createTextNode(' '+bits[1].trimStart()));
       }else{el.textContent=value}
     }else{el.textContent=value}
   }});
   document.querySelectorAll('[data-project-field]').forEach(el=>{const pair=(el.dataset.projectField||'').split(':');const project=content.projects?.find(p=>p.id===pair[0]);if(project){const value=project[pair[1]+'_'+lang];if(typeof value==='string')el.textContent=value}});
   document.querySelectorAll('#travel .travel-place-name[data-en][data-zh]').forEach(el=>{el.textContent=lang==='zh'?el.dataset.zh:el.dataset.en});
   document.querySelectorAll('[data-caption-en]').forEach(el=>{const value=lang==='zh'?el.dataset.captionZh:el.dataset.captionEn;if(value)el.textContent=value});
   document.querySelectorAll('.lang-switch').forEach(b=>{b.textContent=lang==='en'?'English ▾':'繁體中文 ▾';b.setAttribute('aria-label',lang==='en'?'切換至繁體中文':'Switch to English')});
   try{localStorage.setItem('portfolio-language',lang)}catch(e){}
 }
 document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lang-switch').forEach(b=>b.addEventListener('click',()=>apply(lang==='en'?'zh':'en')));
  apply(lang);
  if(location.protocol==='http:'||location.protocol==='https:'){
   fetch('./site-content.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('Not found');return r.json()})
    .then(latest=>{if(latest&&latest.translations&&Array.isArray(latest.projects)){content=latest;apply(lang)}})
    .catch(()=>{}); // Offline or unreachable JSON: static fallback remains readable.
  }
 });
})();
