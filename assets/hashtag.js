if (window.location.hash) {
  window.location.replace(window.location.hash.replace(/#/g, '').replace(/\/\//g, ''));
}
