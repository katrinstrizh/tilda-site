/* Общий JS для ВСЕХ страниц сайта */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    document.documentElement.setAttribute('data-custom-code', 'ok'); // маркер: код подключён
  });
})();
