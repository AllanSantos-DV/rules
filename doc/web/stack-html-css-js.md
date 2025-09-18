---
id: web.stack.base
title: Web — HTML/CSS/JS (base)
type: stack
scope: [web]
---

# <!-- desc: Base tradicional sem framework; uso de módulos ES e boas práticas de acessibilidade. -->
# [web.stack.base]
## Diretrizes

- Sem bundlers: priorizar padrões modernos (modules, fetch, async/await).
- Acessibilidade (ARIA), SEO básico, performance (LCP/CLS/INP).

Checklist
- [ ] Semântica HTML correta
- [ ] Lighthouse ≥ 90 em Performance/A11y/Best Practices/SEO


# [web.stack.base.tooling]
## Tooling e organização

- Módulos ES nativos; estrutura clara de `/assets` (css/js/img).

Checklist
- [ ] Estrutura de pastas definida
- [ ] Sem globals desnecessários


# [web.stack.base.a11y]
## Acessibilidade

- ARIA, foco visível, contraste, navegação por teclado.

Checklist
- [ ] Testes de foco/contraste
- [ ] Labels e roles corretos


# [web.stack.base.performance]
## Performance

- Preload/prefetch quando necessário; imagens otimizadas; evitar bloqueio de renderização.

Checklist
- [ ] Lighthouse ≥ 90
- [ ] Imagens responsivas e otimizadas


# [web.stack.base.testing]
## Linting e testes

- ESLint/Prettier; testes e2e (Playwright) quando aplicável.

Checklist
- [ ] Lint configurado
- [ ] Smoke tests


