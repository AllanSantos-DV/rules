---
id: web.stack.react
title: Web — React
type: stack
scope: [web]
---

# <!-- desc: Biblioteca reativa para UI; foco em componentes, hooks e performance. -->
# [web.stack.react]
## Diretrizes

- Componentes funcionais, hooks, memoização controlada; roteamento e code-splitting.
- Estado: preferir libs leves (Zustand/Context) quando adequado; evitar global desnecessário.

Checklist
- [ ] Evitar renders desnecessários (memo/useMemo/useCallback)
- [ ] Lazy-loading para rotas/páginas pesadas
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [web.stack.react.platform]
## Plataforma e compatibilidade

- React 18+; Vite/Next.js conforme necessidade; TypeScript recomendado.

Checklist
- [ ] TS habilitado
- [ ] Tooling (Vite/Next) definido


# [web.stack.react.state]
## Estado e arquitetura

- Context para escopo local; Zustand/Recoil para casos moderados; evitar global desnecessário.

Checklist
- [ ] Mapa de estado por domínio
- [ ] Evitar prop-drilling excessivo


# [web.stack.react.routing]
## Roteamento e code-splitting

- React Router/Next routes; lazy e suspense em páginas pesadas.

Checklist
- [ ] Rotas definidas e segmentadas
- [ ] Lazy aplicado


# [web.stack.react.a11y]
## Acessibilidade

- Semântica, foco, ARIA; testes com axe.

Checklist
- [ ] Audit de a11y
- [ ] Teclado e leitores de tela


# [web.stack.react.performance]
## Performance

- Memoização controlada; RSC/SSR quando apropriado; imagens otimizadas.

Checklist
- [ ] Profiling em componentes críticos
- [ ] Imagens otimizadas


# [web.stack.react.testing]
## Testes

- Vitest/Jest + Testing Library; e2e com Playwright.

Checklist
- [ ] Cobertura mínima
- [ ] E2E crítico


