(function(){
  // Cache-busting agressivo: sempre usa timestamp como versão
  // Pode ser sobrescrito passando ?v=xxxx na URL para reproduzir builds
  const url = new URL(location.href);
  const forced = url.searchParams.get('v');
  const ver = forced || String(Date.now());
  window.__RGV = ver;
})();

