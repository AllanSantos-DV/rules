(function(){
  // Cache-busting agressivo: sempre usa timestamp como versão
  // Pode ser sobrescrito passando ?v=xxxx na URL para reproduzir builds
  const url = new URL(location.href);
  const forced = url.searchParams.get('v');
  // Force cache bust for GitHub Pages - always use timestamp
  const ver = forced || String(Date.now()) + '_' + Math.random().toString(36).substr(2, 9);
  window.__RGV = ver;
})();

