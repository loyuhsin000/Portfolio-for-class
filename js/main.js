// Dual Language Content Data
    const i18nData = {
      en: {
        lang_name: 'English',
        nav_discover: 'Discover',
        nav_about: 'About',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        hero_heading: `START YOUR <br><span class="italic font-light">ADVENTURE</span> HERE`,
        hero_subheading: 'INDULGE YOUR SPATIAL SPIRIT',
        filter_typology: 'Typology',
        filter_region: 'Region',
        filter_material: 'Material',
        filter_more: 'Architecture',
        btn_search: 'Search',
        badge_featured: 'FEATURED',
        feat_title_1: `Mountain as a <br><span class="italic font-light">place of architecture</span>`,
        feat_subtitle_1: 'Alpine Observatory & Refuge',
        feat_desc_1: 'Anchored within high-altitude granite bedrock, the sanctuary integrates locally extracted stone aggregates into stratified concrete walls. It withstands severe glacial winds while framing an uninterrupted gaze upon the mountain landscape.',
        btn_view_project: 'View Project Dossier →',
        feat_title_2: `Back to <span class="italic font-light">Earth</span>`,
        feat_subtitle_2: 'Subterranean Geothermal Core',
        feat_desc_2: 'Two-thirds of the volumetric footprint is carved directly into the volcanic coastal topography. The surrounding soil mass provides natural passive insulation, while filtered skylights illuminate the raw board-formed concrete chambers.',
        btn_learn_more: 'Learn More',
        about_heading: 'Spatial Practice & Bio',
        about_text_1: 'Kaelen Vance is an architectural researcher and designer focusing on cold-climate vernacular tectonics, mass timber structures, and site-excavated monolithic concrete.',
        about_text_2: 'Our practice approaches architecture not as decorative enclosure, but as an enduring geological dialogue between topographical gravity and atmospheric light.',
        btn_cv: 'Download CV.pdf',
        projects_heading: 'Selected Works',
        contact_heading: 'Inquiries'
      },
      tc: {
        lang_name: '繁體中文',
        nav_discover: '探索發現',
        nav_about: '關於本所',
        nav_projects: '作品集',
        nav_contact: '聯絡諮詢',
        hero_heading: `構築始於 <br><span class="italic font-light">大地與光影</span> 之間`,
        hero_subheading: '沉浸於純粹空間詩意',
        filter_typology: '建築類型',
        filter_region: '地理區位',
        filter_material: '構造材質',
        filter_more: '建築語彙',
        btn_search: '搜尋檔案',
        badge_featured: '精選代表作',
        feat_title_1: `山嶽作為 <br><span class="italic font-light">建築的棲息之所</span>`,
        feat_subtitle_1: '高山冰川觀測所與靜修庇護所',
        feat_desc_1: '直接扎根於高海拔花崗岩基岩之上，本案取用在地開鑿石屑骨料澆注出地層紋理。結構體能抵禦嚴寒暴風雪，同時向壯闊的冰川山嶺框出一道靜謐凝望。',
        btn_view_project: '閱讀案卷圖面 →',
        feat_title_2: `回歸 <span class="italic font-light">大地深處</span>`,
        feat_subtitle_2: '地下溫泉地熱核心與蓄水室',
        feat_desc_2: '將整體量體之三分之二沒入臨海火山地形中，厚重的覆土提供全年度天然被動式保溫。天光自上方頂窗傾瀉而下，映照出木紋清水混凝土的質樸肌理。',
        btn_learn_more: '深入探索',
        about_heading: '建築實踐與歷程',
        about_text_1: 'Kaelen Vance 專注於極端氣候構造、重型木構建築以及在地採石清水混凝土實體之空間研究。',
        about_text_2: '我們視建築為一場地質重力與天候光線的恆久對話，而非表層的裝飾性外殼。',
        btn_cv: '下載完整履歷 (CV.pdf)',
        projects_heading: '精選代表作',
        contact_heading: '專案委託與合作'
      }
    };

    // Project Details Database
    const projectsData = {
      'project-01': {
        title: { en: 'Valais Alpine Monolith', tc: '瓦萊高山石構觀測台' },
        category: { en: 'ALPINE MONOLITH', tc: '高山巨石觀測所' },
        location: { en: 'Valais, Switzerland // 2024', tc: '瑞士瓦萊州 // 2024' },
        material: { en: 'In-situ Granite Aggregate Concrete', tc: '現地花崗岩骨料混凝土' },
        area: '420 m²',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        desc: {
          en: 'Anchored directly into high-altitude granite bedrock, this sanctuary uses stratified aggregate layers to withstand sub-zero winds while providing acoustic silence.',
          tc: '直接扎根於高海拔花崗岩基岩之上，本案使用基地就地開採之骨料分層澆灌，抵禦零下強勁風暴並營造靜謐的沈思音場。'
        }
      },
      'project-02': {
        title: { en: 'Subterranean Reykjanes', tc: '雷克雅內斯地下核心' },
        category: { en: 'GEOTHERMAL CORE', tc: '火山地熱核心浴場' },
        location: { en: 'Reykjanes, Iceland // 2024', tc: '冰島雷克雅內斯 // 2024' },
        material: { en: 'Basalt Slag Concrete & Soil Mass', tc: '玄武岩爐渣混凝土與天然覆土' },
        area: '680 m²',
        img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        desc: {
          en: 'Carved two-thirds into the Icelandic coastal hillside, thermal soil mass guarantees passive climate control year-round with open rainwater skylights.',
          tc: '將三分之二建築量體沒入冰島臨海山丘，覆土蓄熱實現全年度恆溫，天窗引入自然雨水與幽微天光。'
        }
      },
      'project-03': {
        title: { en: 'The Timber Vault', tc: '京都木造幾何穹頂' },
        category: { en: 'PARAMETRIC TIMBER', tc: '參數化木構拱頂' },
        location: { en: 'Kyoto, Japan // 2023', tc: '日本京都 // 2023' },
        material: { en: 'Laminated Cryptomeria Cedar', tc: '北山杉木集成材' },
        area: '310 m²',
        img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        desc: {
          en: 'Developed with master joiners in Kansai, this double-curved lattice dome eliminates steel tension rods through interlocking compression joints.',
          tc: '與關西傳統大工合作，以純卡榫互鎖受壓節點消除外露鋼拉桿，構成連續雙曲面木網格。'
        }
      },
      'project-04': {
        title: { en: 'Dune Research Hub', tc: '納米比亞沙丘前哨' },
        category: { en: 'RAMMED EARTH', tc: '流體力學夯土研究站' },
        location: { en: 'Sossusvlei, Namibia // 2023', tc: '納米比亞索蘇斯弗雷 // 2023' },
        material: { en: 'Stabilized Rammed Desert Sand', tc: '就地固化生土夯砂' },
        area: '560 m²',
        img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        desc: {
          en: 'Engineered with aerodynamic aerofoils to deflect abrasive desert winds while subterranean ducts pre-cool incoming air by 14°C.',
          tc: '以翼型流線曲面導引風沙，地底被動式通風管線可在極端沙漠日溫下預冷空氣達 14°C。'
        }
      }
    };

    let currentLang = 'en';
    let currentStyle = 'A'; // 'A' = Atmospheric, 'B' = Blueprint Grid

    // Language Toggle
    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'tc' : 'en';
      applyLanguage();
      notify(currentLang === 'en' ? 'Language switched to English' : '已切換為繁體中文');
    }

    function applyLanguage() {
      const data = i18nData[currentLang];
      document.getElementById('lang-label').textContent = data.lang_name;
      
      // Update texts
      document.getElementById('nav-discover').textContent = data.nav_discover;
      document.getElementById('nav-about').textContent = data.nav_about;
      document.getElementById('nav-projects').textContent = data.nav_projects;
      document.getElementById('nav-contact').textContent = data.nav_contact;

      document.getElementById('hero-heading').innerHTML = data.hero_heading;
      document.getElementById('hero-subheading').textContent = data.hero_subheading;

      document.getElementById('feat-title-1').innerHTML = data.feat_title_1;
      document.getElementById('feat-subtitle-1').textContent = data.feat_subtitle_1;
      document.getElementById('feat-desc-1').textContent = data.feat_desc_1;

      document.getElementById('feat-title-2').innerHTML = data.feat_title_2;
      document.getElementById('feat-subtitle-2').textContent = data.feat_subtitle_2;
      document.getElementById('feat-desc-2').textContent = data.feat_desc_2;

      document.getElementById('about-text-1').textContent = data.about_text_1;
      document.getElementById('about-text-2').textContent = data.about_text_2;

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.textContent = data[key];
      });
    }

    // Tab Navigation
    function switchTab(tabId) {
      const tabs = ['discover', 'about', 'projects', 'contact'];
      tabs.forEach(t => {
        const el = document.getElementById(`tab-${t}`);
        const nav = document.getElementById(`nav-${t}`);
        if (t === tabId) {
          el.classList.remove('hidden');
          nav.classList.add('text-white');
          nav.classList.remove('text-white/60');
        } else {
          el.classList.add('hidden');
          nav.classList.remove('text-white');
          nav.classList.add('text-white/60');
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Toggle Alternative Direction Style (Direction A vs Direction B)
    function toggleDirectionStyle() {
      const body = document.getElementById('page-body');
      const btn = document.getElementById('style-toggle-btn');
      if (currentStyle === 'A') {
        currentStyle = 'B';
        body.classList.remove('hero-sky-bg');
        body.classList.add('blueprint-mode');
        btn.textContent = 'DIRECTION B: TECTONIC GRID';
        btn.classList.add('border-accent-orange', 'text-accent-orange');
        notify(currentLang === 'en' ? 'Style: Direction B (Tectonic Blueprint)' : '樣式：方案 B（構造藍圖網格）');
      } else {
        currentStyle = 'A';
        body.classList.add('hero-sky-bg');
        body.classList.remove('blueprint-mode');
        btn.textContent = 'DIRECTION A: ATMOSPHERIC';
        btn.classList.remove('border-accent-orange', 'text-accent-orange');
        notify(currentLang === 'en' ? 'Style: Direction A (Atmospheric Glow)' : '樣式：方案 A（氛圍昏黃光影）');
      }
    }

    // Featured block image carousel simulation
    let currentFeatIdx = 1;
    function nextFeatured() {
      currentFeatIdx = currentFeatIdx === 1 ? 3 : 1;
      const key = `project-0${currentFeatIdx}`;
      showProjectModal(key);
    }
    function prevFeatured() {
      currentFeatIdx = currentFeatIdx === 1 ? 4 : 1;
      const key = `project-0${currentFeatIdx}`;
      showProjectModal(key);
    }

    // Project Modal
    function showProjectModal(projKey) {
      const p = projectsData[projKey] || projectsData['project-01'];
      document.getElementById('modal-title').textContent = p.title[currentLang];
      document.getElementById('modal-category').textContent = p.category[currentLang];
      document.getElementById('modal-location').textContent = p.location[currentLang];
      document.getElementById('modal-desc').textContent = p.desc[currentLang];
      document.getElementById('modal-mat').textContent = p.material[currentLang];
      document.getElementById('modal-area').textContent = p.area;
      document.getElementById('modal-img').src = p.img;

      const modal = document.getElementById('project-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeProjectModal() {
      const modal = document.getElementById('project-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    // Filter simulation
    function filterType(cat) {
      switchTab('projects');
      notify(currentLang === 'en' ? `Filtered by: ${cat}` : `已篩選條件：${cat}`);
    }

    function toggleSearch() {
      const bar = document.getElementById('quick-search-bar');
      bar.classList.toggle('hidden');
      if (!bar.classList.contains('hidden')) {
        document.getElementById('quick-input').focus();
      }
    }

    function liveFilter(val) {
      const q = val.toLowerCase();
      document.querySelectorAll('#projects-grid article').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    // Toast Notification helper
    function notify(msg) {
      const toast = document.getElementById('toast');
      const text = document.getElementById('toast-text');
      text.textContent = msg;
      toast.classList.remove('hidden');
      toast.classList.add('flex');
      setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
      }, 2600);
    }

    // Close modal on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectModal();
    });
