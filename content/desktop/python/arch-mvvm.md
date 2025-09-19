---
id: desktop.python.arch.mvvm
title: Arquitetura — MVVM (Desktop)
type: architecture
scope: [desktop, python]
---

# <!-- desc: Separação clara View/ViewModel/Model; testabilidade e reuso de componentes. -->
# [desktop.python.arch.mvvm]
## Diretrizes

- View sem lógica de domínio; ViewModel com estado/ações; Model encapsula regras.
- Bindings reativos onde suportado; eventos/sinais padronizados.

Checklist
- [ ] View sem regras de negócio
- [ ] ViewModel com estado claro
- [ ] Contratos de eventos/sinais


# [desktop.python.arch.mvvm.modules]
## Módulos e organização

- Pacotes por domínio; `ui/components`, `application`, `domain`.

Checklist
- [ ] Pacotes bem definidos
- [ ] Components reutilizáveis


# [desktop.python.arch.mvvm.testing]
## Testes

- Testar ViewModel isoladamente; mocks para camada de infraestrutura.

Checklist
- [ ] Testes de ViewModel
- [ ] Mocks para infra


