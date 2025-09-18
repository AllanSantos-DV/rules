---
id: web.arch.microfrontends
title: Web — Microfrontends
type: architecture
scope: [web]
---

# <!-- desc: Front-ends independentes por domínio; integração via módulo federado/edge. -->
# [web.arch.microfrontends]
## Diretrizes

- Divisão por domínios; contratos claros; integração por módulo federado/iframes/edge.

Checklist
- [ ] Definir limites de domínios e ownership
- [ ] Padronizar contrato e design system
 
# [web.arch.microfrontends.integration]
## Integração e contratos

- Module Federation, Web Components ou edge composition; contratos versionados.

Checklist
- [ ] Contratos e versões definidos
- [ ] Testes de integração entre MFEs


# [web.arch.microfrontends.runtime]
## Runtime e isolamento

- Isolar CSS/JS; comunicação via eventos/bridge; fallback quando módulo indisponível.

Checklist
- [ ] Isolamento garantido
- [ ] Estratégia de fallback

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


