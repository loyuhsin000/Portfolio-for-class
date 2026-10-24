/* Image interaction friction only: no public website can prevent saving screenshots or image URLs. */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (img) {
      img.setAttribute('draggable', 'false');
    });
  });
  document.addEventListener('dragstart', function (event) {
    if (event.target.closest && event.target.closest('img')) event.preventDefault();
  });
  document.addEventListener('contextmenu', function (event) {
    if (event.target.closest && event.target.closest('img, .editorial-visual, .project-card-link')) event.preventDefault();
  });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lightbox-src]').forEach(function (trigger) {
      var dialog = trigger.closest('.project-detail').querySelector('.portfolio-image-dialog');
      if (!dialog) return;
      trigger.addEventListener('click', function () { if (!dialog.open) dialog.showModal(); });
      dialog.querySelector('.image-dialog-close').addEventListener('click', function () {dialog.close();});
      dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    });
  });
})();
