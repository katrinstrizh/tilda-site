/* Tilda loader — единственный файл, подключённый в HEAD Тильды.
   Подключает общий код всего сайта + код конкретной страницы по её адресу.
   Чтобы добавить код для страницы: впишите её путь в PAGES и создайте pages/<имя>.css / .js */
(function () {
  var BASE = 'https://katrinstrizh.github.io/tilda-site/';
  var V = '1'; // увеличивать при каждом деплое (сброс кэша браузера)

  // путь страницы на Тильде -> имя файлов в папке pages/ и какие файлы есть
  var PAGES = {
    // '/': { name: 'home', css: true, js: true },
    // '/about': { name: 'about', css: true, js: false }
  };

  function css(href) {
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = BASE + href + '?v=' + V;
    document.head.appendChild(l);
  }
  function js(src) {
    var s = document.createElement('script');
    s.src = BASE + src + '?v=' + V; s.async = false;
    document.head.appendChild(s);
  }

  css('css/common.css');
  js('js/common.js');

  var path = location.pathname.replace(/\/+$/, '') || '/';
  var p = PAGES[path];
  if (p) {
    if (p.css) css('pages/' + p.name + '.css');
    if (p.js) js('pages/' + p.name + '.js');
  }
})();
