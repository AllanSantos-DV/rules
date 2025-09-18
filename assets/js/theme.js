(function(){
  const btn=document.getElementById('themeToggle');
  const iconEl=btn?btn.querySelector('.material-symbols-outlined'):null;
  const root=document.documentElement;
  const get=()=>sessionStorage.getItem('theme');
  const set=(v)=>sessionStorage.setItem('theme',v);
  const apply=(v)=>{
    root.setAttribute('data-bs-theme',v);
    if(iconEl){ iconEl.textContent = (v==='dark'?'light_mode':'dark_mode'); }
  };
  const init=()=>{const pref=get()||'auto';apply(pref)};
  init();
  if(btn){btn.addEventListener('click',()=>{
    const cur=root.getAttribute('data-bs-theme')||'auto';
    const next=cur==='dark'?'light':'dark';
    apply(next);set(next);
  })}
})();

