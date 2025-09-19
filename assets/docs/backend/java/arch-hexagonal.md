---
id: backend.java.arch.hexagonal
title: Java — Arquitetura Hexagonal (Ports & Adapters)
type: architecture
scope: [backend, java]
---

# <!-- desc: Arquitetura orientada a portas e adaptadores; facilita testes e desacoplamento. -->
# [backend.java.arch.hexagonal]
## Diretrizes

- Domínio independente de frameworks; ports definem contratos; adapters conectam infra.
- Injeção de dependências para conectar adapters; rastrear artefatos em `.agente/rastreamento`.

Checklist
- [ ] Modelos e regras no domínio sem dependências externas
- [ ] Ports claros (in/out) com limites explícitos
- [ ] Adapters testados por integração

Ver também
- `# [global.agent-folder]`
- `# [global.anti-duplication]`
 - `# [global.agent-folder.precheck]`
 - `# [global.agent-folder.postchange-trigger]`


# [backend.java.arch.hexagonal.layers]
## Núcleo, portas e adaptadores

- Domínio (núcleo) puro; sem dependências de framework.
- Ports (in/out) como interfaces; adapters implementam/consomem ports.
- Orquestração em application/service; adapters REST/DB/Messaging nas bordas.

Checklist
- [ ] Ports claramente definidos
- [ ] Adapters separados por tipo (rest/db/messaging)
- [ ] Núcleo sem dependências externas


# [backend.java.arch.hexagonal.tx]
## Fronteiras transacionais

- Transações demarcadas na camada de aplicação; domínio permanece puro.

Checklist
- [ ] Escopo transacional adequado
- [ ] Erros convertidos para respostas/estados apropriados


# [backend.java.arch.hexagonal.mapping]
## Mapeamento e contratos

- DTOs nos adapters; modelos de domínio no núcleo; mapeamento explícito.

Checklist
- [ ] Mapeadores/diretivas claros
- [ ] Contratos de ports estáveis e versionados


# [backend.java.arch.hexagonal.testing]
## Testes

- Unitários para domínio; contrato para ports; integração para adapters.

Checklist
- [ ] Testes de contrato dos ports
- [ ] Integração por adapter (REST/DB/Messaging)


