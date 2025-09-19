---
id: web.arch.spa
title: Web — SPA
type: architecture
scope: [web]
---

# <!-- desc: Aplicação de página única; navegação cliente e atualização dinâmica. -->
# [web.arch.spa]
## Diretrizes

- Single Page Application com roteamento no cliente; hidratação seletiva; caching.

Checklist
- [ ] Code-splitting por rota
- [ ] Estratégias de cache (SW) quando aplicável
 
# [web.arch.spa.routing]
## Roteamento e estado

- Rotas com lazy; estado com stores leves; persistência seletiva.

Checklist
- [ ] Rotas lazy
- [ ] Persistência de estado criteriosa


# [web.arch.spa.performance]
## Performance

- Hidratação seletiva/ilhas quando viável; imagens otimizadas; evitar blocos de render.

Checklist
- [ ] Lighthouse ≥ 90
- [ ] Imagens responsivas otimizadas

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


