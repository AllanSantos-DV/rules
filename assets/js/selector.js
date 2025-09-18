const selection = { domain:null, language:null, framework:null, frameworkVersion:null, architecture:null, version:{ java:null, python:null }, css:null, distribution:null };

const maps = {
  backend: {
    languages: ["java", "python"],
    java: {
      frameworks: {
        "spring-boot": { label: "Spring Boot", versions: ["2.x", "3.x"], icon: 'bolt' },
        "quarkus": { label: "Quarkus", versions: ["2.x", "3.x"], icon: 'memory' },
        "micronaut": { label: "Micronaut", versions: ["3.x", "4.x"], icon: 'grid_view' }
      },
      architectures: ["mvc", "hexagonal"],
      versions: ["11", "17", "21"]
    },
    python: {
      frameworks: ["django", "flask", "fastapi"],
      architectures: ["mvc", "hexagonal"],
      versions: ["3.8", "3.10", "3.12"]
    }
  },
  web: {
    stacks: ["base", "react", "angular", "vue"],
    architectures: ["spa", "ssr", "microfrontends"],
    css: ["tailwind", "bootstrap", "mui"]
  },
  desktop: {
    frameworks: ["pyside6", "tkinter", "kivy"],
    architectures: ["mvvm", "mvc"],
    versions: ["3.13"],
    distribution: ["windows"]
  }
};

const q = (s)=>document.querySelector(s);
const qa = (s)=>Array.from(document.querySelectorAll(s));

async function fetchTextNoCache(path){
  const v = (window.__RGV?('?v='+window.__RGV):'');
  const res = await fetch(path+v, {cache:'no-store'});
  if(!res.ok) throw new Error('fetch fail '+path);
  return await res.text();
}

function extractDescFromMd(md){
  const m = md.match(/^#\s*<!--\s*desc:\s*([^>]+)-->$/m);
  return m ? m[1].trim() : null;
}

async function preloadDescriptions(){
  const files = [
    'doc/backend/java/arch-mvc.md',
    'doc/backend/java/arch-hexagonal.md',
    'doc/backend/java/framework-spring-boot-2x.md',
    'doc/backend/java/framework-spring-boot-3x.md',
    'doc/backend/java/framework-quarkus-2x.md',
    'doc/backend/java/framework-quarkus-3x.md',
    'doc/backend/java/framework-micronaut-3x.md',
    'doc/backend/java/framework-micronaut-4x.md',
    'doc/backend/java/version-11.md',
    'doc/backend/java/version-17.md',
    'doc/backend/java/version-21.md',
    // Python
    'doc/backend/python/framework-django.md',
    'doc/backend/python/framework-flask.md',
    'doc/backend/python/framework-fastapi.md',
    'doc/backend/python/arch-mvc.md',
    'doc/backend/python/arch-hexagonal.md',
    'doc/backend/python/version-3.8.md',
    'doc/backend/python/version-3.10.md',
    'doc/backend/python/version-3.12.md',
    // Web
    'doc/web/stack-html-css-js.md',
    'doc/web/stack-react.md',
    'doc/web/stack-angular.md',
    'doc/web/stack-vue.md',
    'doc/web/arch-spa.md',
    'doc/web/arch-ssr.md',
    'doc/web/arch-microfrontends.md',
    'doc/web/css-tailwind.md',
    'doc/web/css-bootstrap.md',
    'doc/web/css-mui.md'
    ,
    // Desktop (Python)
    'doc/desktop/python/framework-pyside6.md',
    'doc/desktop/python/framework-tkinter.md',
    'doc/desktop/python/framework-kivy.md',
    'doc/desktop/python/arch-mvvm.md',
    'doc/desktop/python/arch-mvc.md',
    'doc/desktop/python/version-3.13.md',
    'doc/desktop/windows-distribution.md'
  ];
  const descMap = {};
  try{
    const texts = await Promise.all(files.map(f=>fetchTextNoCache('/'+f)));
    texts.forEach((md,i)=>{ const d = extractDescFromMd(md); if(d) descMap[files[i]] = d; });
  }catch(err){ console.error('[preloadDescriptions] error', err); }
  window.__RG_DESCRIPTIONS = Object.assign({}, window.__RG_DESCRIPTIONS||{}, descMap);
  console.debug('[preloadDescriptions] loaded', Object.keys(window.__RG_DESCRIPTIONS));
}

function setStep2Active() {
  const c = q('#step2-circle');
  c.classList.add('active');
  q('#step-config').classList.remove('d-none');
}

function renderConfig() {
  const wrap = q('#config-container');
  wrap.innerHTML = '';
  const cards = [];
  console.log('[renderConfig] selection', JSON.parse(JSON.stringify(selection)));
  console.log('[renderConfig] descMap keys', Object.keys(window.__RG_DESCRIPTIONS||{}));
  if (selection.domain === 'backend') {
    // language
    cards.push(cardGroup('Linguagem', maps.backend.languages.map(v=>({value:v, icon:v==='java'?'terminal':'code', label:v.toUpperCase()})), (val)=>{selection.language=val; selection.framework=null; selection.frameworkVersion=null; selection.architecture=null; selection.version={java:null,python:null}; renderConfig()}, selection.language));
    if (selection.language === 'java') {
      // Framework
      const fw = maps.backend.java.frameworks;
      cards.push(cardGroup('Framework', Object.keys(fw).map(k=>({value:k, icon:fw[k].icon, label:fw[k].label})), (val)=>{selection.framework=val; selection.frameworkVersion=null; selection.architecture=null; selection.version.java=null; renderConfig()}, selection.framework));
      if (selection.framework){
        // Framework Version
        const fwv = fw[selection.framework]?.versions||[];
        const iconFor = (v)=> v.startsWith('2')?'filter_2':(v.startsWith('3')?'filter_3':'filter_4');
        cards.push(cardGroup('Versão do Framework', fwv.map(v=>({value:v, icon:iconFor(v), label:v})), (val)=>{selection.frameworkVersion=val; selection.architecture=null; selection.version.java=null; renderConfig()}, selection.frameworkVersion));
      }
      if (selection.framework && selection.frameworkVersion){
        // Arquitetura
        cards.push(cardGroup('Arquitetura', maps.backend.java.architectures.map(v=>({value:v, icon:v==='hexagonal'?'view_in_ar':'device_hub', label:v.toUpperCase()})), (val)=>{selection.architecture=val; renderConfig()}, selection.architecture));
        if (selection.architecture){
          // Java LTS
          cards.push(cardGroup('Versão Java', maps.backend.java.versions.map(v=>({value:v, icon:'numbers', label:v})), (val)=>{selection.version.java=val; selection.version.python=null; renderHint()}, selection.version.java));
        }
      }
    } else if (selection.language === 'python') {
      cards.push(cardGroup('Framework', maps.backend.python.frameworks.map(v=>({value:v, icon:'category', label:v.toUpperCase()})), (val)=>{selection.framework=val; selection.architecture=null; selection.version={java:null,python:null}; renderConfig()}, selection.framework));
      if (selection.framework){
        cards.push(cardGroup('Arquitetura', maps.backend.python.architectures.map(v=>({value:v, icon:v==='hexagonal'?'view_in_ar':'device_hub', label:v.toUpperCase()})), (val)=>{selection.architecture=val; renderConfig()}, selection.architecture));
        if (selection.architecture){
          cards.push(cardGroup('Versão Python', maps.backend.python.versions.map(v=>({value:v, icon:'numbers', label:v})), (val)=>{selection.version.python=val; selection.version.java=null; renderHint()}, selection.version.python));
        }
      }
    }
  } else if (selection.domain === 'web') {
    cards.push(cardGroup('Stack', maps.web.stacks.map(v=>({value:v, icon:'layers', label:v.toUpperCase()})), (val)=>{selection.language='web'; selection.framework=val; selection.architecture=null; selection.css=null; renderConfig()}, selection.framework));
    if (selection.framework){
      const archIcon = (v)=> v==='spa'?'tab_unselected':(v==='ssr'?'dns':'dashboard_customize');
      cards.push(cardGroup('Arquitetura', maps.web.architectures.map(v=>({value:v, icon:archIcon(v), label:v.toUpperCase()})), (val)=>{selection.architecture=val; renderConfig()}, selection.architecture));
      if (selection.architecture){
        cards.push(cardGroup('CSS Framework', maps.web.css.map(v=>({value:v, icon:'palette', label:v.toUpperCase()})), (val)=>{selection.css=val; renderHint()}, selection.css));
      }
    }
  } else if (selection.domain === 'desktop') {
    // Framework
    cards.push(cardGroup('Framework', maps.desktop.frameworks.map(v=>({value:v, icon:'widgets', label:v.toUpperCase()})), (val)=>{selection.language='python'; selection.framework=val; selection.architecture=null; selection.version={java:null,python:null}; selection.distribution=null; renderConfig()}, selection.framework));
    if (selection.framework){
      // Arquitetura
      cards.push(cardGroup('Arquitetura', maps.desktop.architectures.map(v=>({value:v, icon:(v==='mvvm'?'view_quilt':'dashboard'), label:v.toUpperCase()})), (val)=>{selection.architecture=val; renderConfig()}, selection.architecture));
      if (selection.architecture){
        // Versão Python (3.13)
        cards.push(cardGroup('Versão Python', maps.desktop.versions.map(v=>({value:v, icon:'numbers', label:v})), (val)=>{selection.version.python=val; selection.version.java=null; renderConfig()}, selection.version.python));
        if (selection.version.python){
          // Distribuição (Windows)
          cards.push(cardGroup('Distribuição', maps.desktop.distribution.map(v=>({value:v, icon:'install_desktop', label:v.toUpperCase()})), (val)=>{selection.distribution=val; renderHint()}, selection.distribution));
        }
      }
    }
  }
  cards.forEach(el=>wrap.appendChild(el));
  // aguarda o DOM aplicar as mudanças para checar última etapa
  setTimeout(updatePreviewState, 0);
  // foco mobile: manter apenas o último grupo visível
  enforceMobileLastOnly();
}

function descBlock(title, text){
  const col = document.createElement('div');
  col.className = 'col-12';
  col.innerHTML = `<div class="text-muted small mb-1 category">${title}</div><div class="text-secondary small mb-2">${text}</div>`;
  return col;
}

function cardGroup(title, options, onSelect, currentValue) {
  const col = document.createElement('div');
  col.className = 'col-12';
  const row = document.createElement('div');
  row.className = 'row g-3';
  const h = document.createElement('h6');
  h.className = 'fw-semibold mb-2';
  h.textContent = title;
  col.appendChild(h);
  options.forEach(opt=>{
    const c = document.createElement('div');
    c.className = 'col-12 col-sm-6 col-lg-4';
    const card = document.createElement('div');
    card.className='card card-hover h-100';
    card.setAttribute('role','button');
    card.addEventListener('click',()=>{
      // marcar visualmente o card ativo dentro do grupo
      row.querySelectorAll('.card').forEach(el=>el.classList.remove('active'));
      card.classList.add('active');
      const rows = qa('#config-container .row.g-3');
      const isLast = rows.length && rows[rows.length-1]===row;
      console.log('[cardClick]', {group:title, value:opt.value, isLast});
      onSelect(opt.value);
      // atualizar estado imediatamente quando o clique ocorrer no último grupo
      if(isLast){ updatePreviewState(); }
    });
    const body = document.createElement('div');
    body.className='card-body d-flex align-items-center gap-3';
    const iconHtml = opt.icon?.startsWith('bi-') ? `<i class=\"bi ${opt.icon} fs-3\"></i>` : `<span class=\"material-symbols-outlined\">${opt.icon||''}</span>`;
    let descHtml = '';
    const findDesc = (substr)=>{
      const entries = Object.entries(window.__RG_DESCRIPTIONS||{});
      const hit = entries.find(([k])=>k.includes(substr));
      const desc = hit? hit[1] : '';
      console.debug('[descSearch]', {group:title, value: opt.value, substr, file: hit?hit[0]:'', has: !!desc});
      return desc;
    };
    if (title==='Framework' && selection.language==='java'){
      descHtml = findDesc(`framework-${opt.value}`);
    } else if (title==='Framework' && selection.language==='python'){
      descHtml = findDesc(`framework-${opt.value}`) || findDesc(`backend/python/framework-${opt.value}`);
    } else if (title==='Arquitetura'){
      descHtml = findDesc(`arch-${opt.value}`);
    } else if (title.startsWith('Versão Java')){
      descHtml = findDesc(`version-${opt.value}`);
    } else if (title.startsWith('Versão Python')){
      // Arquivos estão nomeados com ponto: version-3.8.md, version-3.10.md, version-3.12.md
      const key = String(opt.value);
      descHtml = findDesc(`version-${key}`) || findDesc(`backend/python/version-${key}`);
    } else if (title.startsWith('Versão do Framework') && selection.language==='java' && selection.framework){
      const versionKey = String(opt.value).replace(/\./g,''); // 2x, 3x, 4x
      descHtml = findDesc(`framework-${selection.framework}-${versionKey}`);
    } else if (title==='Stack'){
      const key = (opt.value==='base') ? 'web/stack-html-css-js' : `web/stack-${opt.value}`;
      descHtml = findDesc(key);
    } else if (title==='CSS Framework'){
      descHtml = findDesc(`css-${opt.value}`);
    } else if (selection.domain==='desktop'){
      if (title==='Framework'){
        descHtml = findDesc(`desktop/python/framework-${opt.value}`) || findDesc(`framework-${opt.value}`);
      } else if (title==='Arquitetura'){
        descHtml = findDesc(`desktop/python/arch-${opt.value}`) || findDesc(`arch-${opt.value}`);
      } else if (title.startsWith('Versão Python')){
        const key = String(opt.value);
        descHtml = findDesc(`desktop/python/version-${key}`) || findDesc(`version-${key}`);
      } else if (title==='Distribuição'){
        descHtml = findDesc(`desktop/windows-distribution`);
      }
    }
    const expectedDesc = (title==='Framework') || title==='Arquitetura' || title.startsWith('Versão Java') || title.startsWith('Versão Python') || (title.startsWith('Versão do Framework')) || title==='Stack' || title==='CSS Framework' || title==='Distribuição';
    if(descHtml){ descHtml = `<div class=\"text-muted small\">${descHtml}</div>`; } else if(expectedDesc){ console.warn('[descMissing]', {group:title, value:opt.value}); }
    body.innerHTML = `${iconHtml}<div><div class=\"fw-semibold\">${opt.label}</div>${descHtml}</div>`;
    if(currentValue && currentValue===opt.value){ card.classList.add('active'); }
    card.appendChild(body); c.appendChild(card); row.appendChild(c);
  });
  col.appendChild(row);
  return col;
}

function renderHint(){
  const s = {...selection};
  q('#selectionHint').textContent = JSON.stringify(s);
  sessionStorage.setItem('rg.selection', JSON.stringify(s));
}

function initFromPermalink(){
  const p = new URLSearchParams(location.search);
  const saved = sessionStorage.getItem('rg.selection');
  if (p.get('domain')) {
    selection.domain = p.get('domain');
    selection.language = p.get('language');
    selection.framework = p.get('framework');
    selection.architecture = p.get('architecture');
    const jv = p.get('version.java');
    const py = p.get('version.python');
    selection.version.java = jv||null;
    selection.version.python = py||null;
  } else if (saved) {
    Object.assign(selection, JSON.parse(saved));
  }
}

async function init(){
  initFromPermalink();
  await preloadDescriptions();
  const domainCards = qa('#step-domain .card');
  const reset = ()=>{
    selection.domain = null;
    selection.language = null;
    selection.framework = null;
    selection.architecture = null;
    selection.version = {java:null, python:null};
    sessionStorage.removeItem('rg.selection');
    location.href = './index.html';
  };
  domainCards.forEach(card=>{
    const act=()=>{
      selection.domain = card.dataset.value;
      // Resetar seleção ao trocar de árvore para evitar estados inconsistentes
      selection.language = null;
      selection.framework = null;
      selection.frameworkVersion = null;
      selection.architecture = null;
      selection.version = { java:null, python:null };
      selection.css = null;
      setStep2Active();
      renderConfig();
      renderHint();
      updatePreviewState();
    };
    card.addEventListener('click', act);
    card.addEventListener('keypress', (e)=>{ if(e.key==='Enter' || e.key===' ') act(); });
  });
  // Reiniciar botão (se existir na página)
  const reiniciar = document.querySelector('a.btn.btn-outline-secondary[href$="index.html"]');
  if(reiniciar){ reiniciar.addEventListener('click', (e)=>{ e.preventDefault(); reset(); }); }
  if (selection.domain){
    setStep2Active();
    renderConfig();
    renderHint();
    updatePreviewState();
  }
  q('#toPreview').addEventListener('click', (e)=>{
    if(!isComplete() || !isLastStepActive() || q('#toPreview').classList.contains('disabled')){ e.preventDefault(); return; }
    const params = new URLSearchParams();
    params.set('domain', selection.domain||'');
    params.set('language', selection.language||'');
    params.set('framework', selection.framework||'');
    params.set('architecture', selection.architecture||'');
    if (selection.version.java) params.set('version.java', selection.version.java);
    if (selection.version.python) params.set('version.python', selection.version.python);
    if (selection.distribution) params.set('distribution', selection.distribution);
    q('#toPreview').setAttribute('href', '/preview.html?'+params.toString());
  });
}

document.addEventListener('DOMContentLoaded', init);

function isComplete(){
  if(selection.domain==='backend'){
    // Simplificação: habilita quando a última etapa (versão da linguagem) estiver selecionada
    return !!(selection.version.java || selection.version.python);
  }
  if(selection.domain==='web'){
    // Simplificação: habilita quando a última etapa (CSS framework) estiver selecionada
    return !!selection.css;
  }
  if(selection.domain==='desktop'){
    // habilita quando a última etapa (Distribuição) estiver selecionada
    return !!(selection.distribution);
  }
  return false;
}

function updatePreviewState(){
  const btn = q('#toPreview');
  const ok = isComplete() && isLastStepActive();
  if(!btn) return;
  if(ok){
    btn.classList.remove('disabled');
    btn.setAttribute('aria-disabled','false');
  } else {
    btn.classList.add('disabled');
    btn.setAttribute('aria-disabled','true');
  }
  console.log('[updatePreviewState]', {ok, isComplete:isComplete(), lastActive:isLastStepActive(), selection: JSON.parse(JSON.stringify(selection))});
}

function isLastStepActive(){
  const rows = qa('#config-container .row.g-3');
  if(!rows || rows.length===0){ console.log('[isLastStepActive] no rows'); return false; }
  const lastRow = rows[rows.length-1];
  const active = !!lastRow.querySelector('.card.active');
  console.log('[isLastStepActive]', {rows: rows.length, active});
  return active;
}

function enforceMobileLastOnly(){
  const isMobile = window.matchMedia('(max-width: 576px)').matches;
  if(!isMobile) return;
  const rows = qa('#config-container .row.g-3');
  if(!rows.length) return;
  rows.forEach(r=>{
    const col = r.closest('.col-12');
    if(!col) return;
    col.classList.add('d-none');
  });
  const lastRow = rows[rows.length-1];
  const lastCol = lastRow.closest('.col-12');
  if(lastCol) lastCol.classList.remove('d-none');
}

