---
id: web.stack.vue
title: Web — Vue
type: stack
scope: [web]
---

# <!-- desc: Framework progressivo e simples; Composition API e pinia para estado. -->
# [web.stack.vue]
## Diretrizes

- Composition API e `<script setup>`; Pinia para estado; rotas com lazy-loading.
- Seguir Vue Style Guide (oficial) para nomeação/organização.

Checklist
- [ ] Componentes pequenos e coesos
- [ ] Reatividade com `computed`/`watch` quando necessário
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [web.stack.vue.platform]
## Plataforma e compatibilidade

- Vue 3; Vite; TypeScript recomendado; Pinia para estado.

Checklist
- [ ] TS habilitado
- [ ] Vite configurado


# [web.stack.vue.state]
## Estado e arquitetura

- Pinia para estado global leve; evitar acoplamento excessivo entre stores.

Checklist
- [ ] Stores por domínio
- [ ] Evitar dependências cíclicas


# [web.stack.vue.routing]
## Roteamento e code-splitting

- Vue Router; lazy routes para páginas pesadas.

Checklist
- [ ] Rotas definidas/lazy


# [web.stack.vue.a11y]
## Acessibilidade

- Semântica, foco, ARIA; testes com axe.

Checklist
- [ ] Audit a11y
- [ ] Teclado/leitores de tela


# [web.stack.vue.performance]
## Performance

- Reatividade com `computed` e `watchEffect`; imagens otimizadas.

Checklist
- [ ] Profiling e otimizações
- [ ] Imagens responsivas


# [web.stack.vue.testing]
## Testes

- Vitest + Vue Testing Library; e2e com Playwright.

Checklist
- [ ] Cobertura mínima
- [ ] E2E crítico


