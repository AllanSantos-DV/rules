---
id: backend.python.arch.mvc
title: Python — Arquitetura MVC
type: architecture
scope: [backend, python]
---

# <!-- desc: Padrão tradicional com separação entre camadas de apresentação e regras. -->
# [backend.python.arch.mvc]
## Diretrizes

- Separar camadas View/Controller, Service e Repository/Data Access.
- Preferir validações e regras de negócio fora das views.

Checklist
- [ ] Views finas; Services coesos
- [ ] Repositórios com fronteira clara
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [backend.python.arch.mvc.layers]
## Camadas e responsabilidades

- View/Controller: orquestrar requisição/resposta; sem reger negócios.
- Service: regras/validações; transações quando aplicável.
- Repository/DAO: persistência.

Checklist
- [ ] Views finas
- [ ] Serviços coesos e transacionais
- [ ] Repositórios focados em persistência


# [backend.python.arch.mvc.dto]
## DTOs e validação

- DTOs Pydantic (ou forms/serializers conforme framework); validação na borda.

Checklist
- [ ] DTOs por endpoint
- [ ] Validação na entrada


# [backend.python.arch.mvc.testing]
## Testes

- Unitários para Services; integração para Repositories/rotas.

Checklist
- [ ] Cobertura mínima
- [ ] Testes de integração


