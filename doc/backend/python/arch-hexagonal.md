---
id: backend.python.arch.hexagonal
title: Python — Arquitetura Hexagonal (Ports & Adapters)
type: architecture
scope: [backend, python]
---

# <!-- desc: Portas e adaptadores; domínio desacoplado de frameworks e infraestrutura. -->
# [backend.python.arch.hexagonal]
## Diretrizes

- Domínio independente de frameworks; contracts via protocolos/ABCs.
- Adaptadores para web, persistência e integrações externas.

Checklist
- [ ] Definir ports (protocols) claros
- [ ] Domínio sem dependências externas
- [ ] Adapters testados por integração
 
Ver também
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [backend.python.arch.hexagonal.layers]
## Núcleo, ports e adaptadores

- Núcleo de domínio sem frameworks; ports como Protocol/ABC; adapters implementam ports.
- Adapters REST/CLI/DB/Messaging nas bordas; orquestração em serviços de aplicação.

Checklist
- [ ] Ports definidos e versionados
- [ ] Adapters separados por tipo
- [ ] Núcleo isolado


# [backend.python.arch.hexagonal.tx]
## Fronteiras transacionais

- Transações na camada de aplicação; domínio puro.

Checklist
- [ ] Escopo transacional adequado
- [ ] Tratamento uniforme de erros


# [backend.python.arch.hexagonal.mapping]
## Mapeamento e contratos

- DTOs nos adapters; modelos de domínio internos; conversões explícitas.

Checklist
- [ ] Mapeadores claros
- [ ] Contratos dos ports estáveis


# [backend.python.arch.hexagonal.testing]
## Testes

- Unitários no domínio; contrato para ports; integração para adapters.

Checklist
- [ ] Testes de contrato
- [ ] Integração por adapter


