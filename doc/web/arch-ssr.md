---
id: web.arch.ssr
title: Web — SSR
type: architecture
scope: [web]
---

# <!-- desc: Renderização no servidor; melhor SEO e performance inicial. -->
# [web.arch.ssr]
## Diretrizes

- Server-Side Rendering para SEO/perf inicial; considerar streaming e cache.

Checklist
- [ ] Cache de páginas/respostas
- [ ] Estrutura para dados assíncronos no servidor
 
# [web.arch.ssr.render]
## Renderização e dados

- Streaming/partial hydration quando disponível; pré-busca de dados; erros controlados.

Checklist
- [ ] Streaming/hidratação configurados
- [ ] Estratégia de erro/timeout


# [web.arch.ssr.performance]
## Performance e SEO

- Cache (CDN/edge); tags meta/OG; sitemaps.

Checklist
- [ ] CDN configurada
- [ ] SEO básico garantido

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


