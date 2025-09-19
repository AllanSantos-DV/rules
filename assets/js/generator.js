async function fetchText(path){
  const v = (window.__RGV?('?v='+window.__RGV):'');
  console.log('[fetchText] Attempting to fetch:', path + v);
  const res = await fetch(path + v, {cache:'no-store'});
  console.log('[fetchText] Response status:', res.status, 'for path:', path);
  if(!res.ok) throw new Error('Falha ao carregar: '+path);
  return await res.text();
}

// Robust fetch: try several candidate paths to account for base path differences (GitHub Pages)
async function fetchTextTry(paths){
  let lastErr = null;
  console.log('[fetchTextTry] Starting with paths:', paths);
  console.log('[fetchTextTry] Current location:', location.href);
  console.log('[fetchTextTry] Pathname:', location.pathname);
  
  for(const p of paths){
    try{
      // Convert relative paths to absolute for GitHub Pages
      let absolutePath = p;
      if (!p.startsWith('http') && !p.startsWith('/')) {
        // Relative path - determine base
        if (location.pathname.includes('/rules')) {
          absolutePath = '/rules/' + p;
        } else {
          absolutePath = '/' + p;
        }
      }
      console.log('[fetchTextTry] Trying path:', absolutePath);
      const text = await fetchText(absolutePath);
      console.log('[fetchTextTry] SUCCESS loaded:', absolutePath);
      return text;
    }catch(err){
      lastErr = err;
      console.warn('[fetchTextTry] FAILED', p, err.message);
    }
  }
  throw lastErr || new Error('All fetch attempts failed');
}

function parseAnchors(md){
  const anchors = [];
  md.split('\n').forEach(raw=>{
    const line = raw.replace(/^\uFEFF?/, '').trimStart();
    const m = line.match(/^#\s*\[(.*?)\]/);
    if(m){
      const id = m[1].trim();
      anchors.push({ id, path: `# [${id}]` });
    }
  });
  return anchors;
}

function extractDesc(md){
  const m = md.match(/^#\s*<!--\s*desc:\s*([^>]+)-->$/m);
  return m ? m[1].trim() : null;
}

function ensureMustAnchors(front, anchors){
  const required = (front.mustIncludeAnchors||[]);
  const present = new Set(anchors.map(a=>a.id));
  const missing = required.filter(id=>!present.has(id));
  console.log('[generator] anchors found', anchors.map(a=>a.id));
  console.log('[generator] required', required);
  if(missing.length) throw new Error('Âncoras obrigatórias ausentes: '+missing.join(', '));
}

function parseFrontMatter(tpl){
  // crude split of front matter --- ... ---
  const m = tpl.match(/^---[\s\S]*?---/);
  if(!m) return { front:{}, body: tpl };
  const fm = m[0];
  const body = tpl.slice(fm.length).trimStart();
  // YAML parse minimal (keys simple): we fallback to regex for mustIncludeAnchors
  const must = Array.from(fm.matchAll(/mustIncludeAnchors:[\s\S]*?-\s*(.*)/g)).map(x=>x[1]).filter(Boolean).map(s=>s.trim());
  return { front: { mustIncludeAnchors: must }, body, raw: fm };
}

function fillScope(template, sel){
  const now = new Date().toISOString();
  return template
    .replace('{{ISO_DATETIME_UTC}}', now)
    .replace('{{backend|web|desktop}}', sel.domain||'')
    .replace('{{java|python|web}}', sel.language||'')
    // framework: suportar templates antigos e novos
    .replace('{{spring|fastapi|django|flask|react|angular|vue|base}}', sel.framework||'')
    .replace('{{spring|fastapi|django|flask|react|angular|vue|base|pyside6|tkinter|kivy}}', sel.framework||'')
    // arquitetura: suportar templates antigos e novos
    .replace('{{mvc|hexagonal|spa|ssr|microfrontends}}', sel.architecture||'')
    .replace('{{mvc|hexagonal|spa|ssr|microfrontends|mvvm}}', sel.architecture||'')
    .replace('{{11|17|21|null}}', sel.version?.java||'')
    .replace('{{3.8|3.10|3.12|3.13|null}}', sel.version?.python||'')
    .replace('{{windows|null}}', sel.distribution||'')
    .replace('{{DYNAMIC_ANCHORS}}', '...'); // placeholder para âncoras dinâmicas
}

// Template embedded directly to avoid fetch issues
function getFinalTemplate() {
  return `---
id: final
title: Final Guide
specVersion: 1.0
generatedAt: {{ISO_DATETIME_UTC}}
scope:
  domain: {{backend|web|desktop}}
  language: {{java|python|web}}
  framework: {{spring|fastapi|django|flask|react|angular|vue|base|pyside6|tkinter|kivy}}
  architecture: {{mvc|hexagonal|spa|ssr|microfrontends|mvvm}}
  version:
    java: {{11|17|21|null}}
    python: {{3.8|3.10|3.12|3.13|null}}
mustIncludeAnchors:
  - global.agent-folder
  - global.agent-folder.precheck
  - global.agent-folder.postchange-trigger
  - global.anti-duplication
  - global.decision-versioning
  - global.comments-docs
  - global.process-analysis
index:
  anchors:
    # Populated by the generator by scanning included files for lines starting with "# ["
    # Example entries (dynamic):
    - { id: "global.agent-folder", path: "# [global.agent-folder]" }
    - { id: "global.process-analysis", path: "# [global.process-analysis]" }
    - { id: "backend.java.arch.hexagonal", path: "# [backend.java.arch.hexagonal]" }
    - { id: "backend.java.version.21", path: "# [backend.java.version.21]" }
---

# [final.introduction]
## Como usar este guia

- Este documento consolida as seções globais e específicas da seleção do usuário.
- Use o índice em \`index.anchors\` para saltar diretamente para a seção desejada.

<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de doc/global/agent-folder.md -->
<!-- INCLUDE: doc/global/agent-folder.md -->

<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de doc/global/process-analysis.md -->
<!-- INCLUDE: doc/global/process-analysis.md -->

<!-- Depois, inserir os blocos específicos selecionados pelo usuário -->
<!-- INCLUDE: {{SELECTED_BLOCKS}} -->

# [final.validity]
## Validação do documento

- Este guia é válido somente se TODAS as âncoras de \`mustIncludeAnchors\` estiverem presentes no \`index.anchors\`.
- Se faltar alguma âncora obrigatória, o agente deve interromper, reportar o problema e solicitar a regeneração do documento final.`;
}

function mapSelectionToFiles(sel){
  const files = ['assets/docs/global/agent-folder.md', 'assets/docs/global/process-analysis.md'];
  if(sel.domain==='backend' && sel.language==='java'){
    if(sel.framework && sel.frameworkVersion){
      const fwv = String(sel.frameworkVersion).replace(/\./g,'');
      files.push(`assets/docs/backend/java/framework-${sel.framework}-${fwv}.md`);
    }
    if(sel.architecture==='hexagonal') files.push('assets/docs/backend/java/arch-hexagonal.md');
    if(sel.architecture==='mvc') files.push('assets/docs/backend/java/arch-mvc.md');
    if(sel.version?.java) files.push(`assets/docs/backend/java/version-${sel.version.java}.md`);
  } else if(sel.domain==='backend' && sel.language==='python'){
    if(sel.framework) files.push(`assets/docs/backend/python/framework-${sel.framework}.md`);
    if(sel.architecture==='hexagonal') files.push('assets/docs/backend/python/arch-hexagonal.md');
    if(sel.architecture==='mvc') files.push('assets/docs/backend/python/arch-mvc.md');
    if(sel.version?.python) files.push(`assets/docs/backend/python/version-${sel.version.python}.md`);
  } else if(sel.domain==='web'){
    if(sel.framework==='base') files.push('assets/docs/web/stack-html-css-js.md');
    if(['react','angular','vue'].includes(sel.framework||'')) files.push(`assets/docs/web/stack-${sel.framework}.md`);
    if(['spa','ssr','microfrontends'].includes(sel.architecture||'')) files.push(`assets/docs/web/arch-${sel.architecture}.md`);
    if(sel.css) files.push(`assets/docs/web/css-${sel.css}.md`);
  } else if(sel.domain==='desktop'){
    if(['pyside6','tkinter','kivy'].includes(sel.framework||'')) files.push(`assets/docs/desktop/python/framework-${sel.framework}.md`);
    if(['mvvm','mvc'].includes(sel.architecture||'')) files.push(`assets/docs/desktop/python/arch-${sel.architecture}.md`);
    if(sel.version?.python) files.push(`assets/docs/desktop/python/version-${sel.version.python}.md`);
    if(sel.distribution==='windows') files.push('assets/docs/desktop/windows-distribution.md');
  }
  return files;
}

function buildPermalink(sel){
  const p = new URLSearchParams();
  for(const [k,v] of Object.entries(sel)){
    if(k==='version' && v){
      if(v.java) p.set('version.java', v.java);
      if(v.python) p.set('version.python', v.python);
    } else if(v) p.set(k, v);
  }
  return location.origin+location.pathname+'?'+p.toString();
}

async function run(){
  const codeEl = document.getElementById('finalMd');
  const btnDl = document.getElementById('btnDownload');
  const btnLink = document.getElementById('btnPermalink');
  const saved = sessionStorage.getItem('rg.selection') || localStorage.getItem('rg.selection');
  const params = new URLSearchParams(location.search);
  const sel = saved ? JSON.parse(saved) : {};
  sel.domain = params.get('domain')||sel.domain||'';
  sel.language = params.get('language')||sel.language||'';
  sel.framework = params.get('framework')||sel.framework||'';
  sel.architecture = params.get('architecture')||sel.architecture||'';
  sel.version = sel.version||{};
  sel.version.java = params.get('version.java')||sel.version.java||'';
  sel.version.python = params.get('version.python')||sel.version.python||'';
  sel.distribution = params.get('distribution')||sel.distribution||'';

  // Use embedded template to avoid fetch issues
  const template = getFinalTemplate();
  const {front, body, raw} = parseFrontMatter(template);
  let finalText = fillScope(template, sel);

  // include global then specific blocks
  const files = mapSelectionToFiles(sel);
  console.log('[generator] files', files);
  // Build candidate paths for each file and try to load them robustly
  const partsRaw = await Promise.all(files.map(async (f)=>{
    const candidates = [
      './' + f,
      f,
      new URL('./' + f, location.origin + location.pathname).href
    ];
    return await fetchTextTry(candidates);
  }));
  const stripFront = (t)=>{
    const m = t.match(/^---[\s\S]*?---\r?\n/);
    return m ? t.slice(m[0].length) : t;
  };
  const parts = partsRaw.map(stripFront);

  finalText = finalText
    .replace('<!-- INCLUDE: doc/global/agent-folder.md -->', parts[0])
    .replace('<!-- INCLUDE: doc/global/process-analysis.md -->', parts[1])
    .replace('<!-- INCLUDE: {{SELECTED_BLOCKS}} -->', parts.slice(2).join('\n\n'));

  // Injetar distribution no front matter scope se existir
  if (sel.distribution) {
    finalText = finalText.replace(/(scope:\s*[\s\S]*?)(\nmustIncludeAnchors:)/, (match, scopeBlock, tail)=>{
      if (scopeBlock.includes('\n  distribution:')) return match; // já existe
      return scopeBlock + `\n  distribution: ${sel.distribution}` + tail;
    });
  }

  // anchors (parse do texto final para incluir final.*)
  let anchors = parseAnchors(finalText);
  // ordenar: global -> backend -> web -> final -> outros
  const groupOrder = (id)=> id.startsWith('global.')?0 : id.startsWith('backend.')?1 : id.startsWith('web.')?2 : id.startsWith('final.')?3 : 4;
  anchors = anchors.sort((a,b)=>{
    const ga = groupOrder(a.id), gb = groupOrder(b.id);
    if(ga!==gb) return ga-gb;
    return a.id.localeCompare(b.id);
  });
  ensureMustAnchors(front, anchors);

  // Build map of short descriptions by file (first found)
  const descMap = {};
  files.forEach((f, i)=>{
    const d = extractDesc(parts[i]);
    if(d) descMap[f] = d;
  });
  window.__RG_DESCRIPTIONS = descMap; // expose for selector UI if needed

  // inject anchors into front matter index (robusto a espaços e CRLF)
  const anchorsYamlList = anchors.map(a=>`    - { id: "${a.id}", path: "${a.path}" }`).join('\n');
  const anchorsBlock = `index:\n  anchors:\n${anchorsYamlList}`;
  finalText = finalText.replace(/index:\s*\n\s*anchors:\s*[\s\S]*?(?=\n---)/, anchorsBlock);

  // Apender bloco JSON compacto de resumo (scope + anchors)
  const summary = {
    scope: {
      domain: sel.domain||'',
      language: sel.language||'',
      framework: sel.framework||'',
      architecture: sel.architecture||'',
      version: { java: sel.version?.java||'', python: sel.version?.python||'' },
      distribution: sel.distribution||''
    },
    anchors: anchors
  };
  const summaryJson = JSON.stringify(summary, null, 2); // Formatação legível
  finalText += `\n\n# [final.index.json]\n\n\`\`\`json\n${summaryJson}\n\`\`\``;

  codeEl.textContent = finalText;
  btnDl.addEventListener('click', ()=>{
    const blob = new Blob([finalText], {type:'text/markdown;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'final-guide.md'; a.click();
    URL.revokeObjectURL(url);
  });
  btnLink.addEventListener('click', ()=>{
    navigator.clipboard.writeText(buildPermalink(sel));
    btnLink.textContent = 'Copiado!';
    setTimeout(()=>btnLink.textContent='Permalink',1200);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  run().catch(err=>{
    document.getElementById('finalMd').textContent = 'Erro: '+err.message;
  });
});

