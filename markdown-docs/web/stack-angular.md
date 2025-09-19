---
id: web.stack.angular
title: Web — Angular
type: stack
scope: [web]
---

# <!-- desc: Framework completo para SPAs corporativas; CLI, DI e RxJS integrados. -->
# [web.stack.angular]
## Diretrizes

- Seguir Angular Style Guide; módulos/standalone components; RxJS com parcimônia.
- Estrutura de pastas por feature; DI e serviços reutilizáveis.

Checklist
- [ ] Observables com unsubscribe/async pipe
- [ ] Standalone components onde fizer sentido
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [web.stack.angular.platform]
## Plataforma e compatibilidade

- Angular 16+; TypeScript estrito; CLI para geração e testes.

Checklist
- [ ] TS strict
- [ ] Angular CLI configurado


# [web.stack.angular.state]
## Estado e arquitetura

- Services/DI; NgRx/Zustand-like libs quando necessário; modular por feature.

Checklist
- [ ] Mapa de estado por domínio
- [ ] Módulos/standalone por feature


# [web.stack.angular.rx]
## RxJS e assinaturas

- Preferir `async` pipe; gerenciar unsubscribe com `takeUntil`/destroyRef.

Checklist
- [ ] Sem vazamentos de subscription
- [ ] `async` pipe aplicado


# [web.stack.angular.a11y]
## Acessibilidade

- Semântica, foco, ARIA; CDK a11y quando aplicável.

Checklist
- [ ] Audit de a11y
- [ ] Teclado/leitores de tela


# [web.stack.angular.performance]
## Performance

- ChangeDetectionStrategy.OnPush; lazy routes; imagens otimizadas.

Checklist
- [ ] OnPush nos componentes adequados
- [ ] Lazy em rotas


# [web.stack.angular.testing]
## Testes

- Jest/Vitest + Testing Library; e2e com Playwright.

Checklist
- [ ] Cobertura mínima
- [ ] E2E crítico


