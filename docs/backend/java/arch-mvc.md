---
id: backend.java.arch.mvc
title: Java — Arquitetura MVC
type: architecture
scope: [backend, java]
---

# <!-- desc: Padrão Model-View-Controller tradicional; separa regras de negócio da interface. -->
# [backend.java.arch.mvc]
## Diretrizes

- Separar camadas Controller, Service, Repository.
- Domínio e validações no Service; Controllers finos; Repositories focados em persistência.

Checklist
- [ ] Evitar regras de negócio em Controllers
- [ ] Serviços coesos com dependências explícitas
- [ ] Testes unitários para Services, integração para Repositories

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
 - `# [global.agent-folder.precheck]`
 - `# [global.agent-folder.postchange-trigger]`


# [backend.java.arch.mvc.layers]
## Camadas e responsabilidades

- Controller: orquestra requisição/resposta; sem regra de negócio.
- Service: regras de negócio/validações; transações.
- Repository: persistência; consultas otimizadas.

Checklist
- [ ] Controllers finos
- [ ] Serviços coesos e transacionais
- [ ] Repositórios focados em persistência


# [backend.java.arch.mvc.dto]
## DTOs, mapeamento e validação

- DTOs para boundary; validação Jakarta; mapeamento explícito.

Checklist
- [ ] DTOs por endpoint
- [ ] Validação em DTOs
- [ ] Mapeamento claro entre DTO e domínio


# [backend.java.arch.mvc.tx]
## Transações e consistência

- Demarcar transações no Service; idempotência quando aplicável.

Checklist
- [ ] Escopo transacional adequado
- [ ] Erros mapeados para códigos HTTP


# [backend.java.arch.mvc.testing]
## Testes

- Unitários para Services; integração para Repositories; slice para Controllers.

Checklist
- [ ] Cobertura mínima
- [ ] Testes slice e integração


