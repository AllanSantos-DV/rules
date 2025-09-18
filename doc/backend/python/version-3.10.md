---
id: backend.python.version.3_10
title: Python 3.10 — Diretrizes de desenvolvimento
type: version
scope: [backend, python]
---

# <!-- desc: Recursos modernos (match/case); melhorias de tipagem. -->
# [backend.python.version.3_10]
## Práticas específicas de Python 3.10

- Structural pattern matching (`match/case`) para fluxos claros.
- Tipos `typing` aprimorados (e.g., `TypeAlias`). 

Checklist
- [ ] Usar `match/case` quando simplificar lógica condicional
- [ ] Atualizar anotações para novos tipos quando útil


# [backend.python.version.3_10.tooling]
## Tooling e compatibilidade

- Verificar libs compatíveis com 3.10; CI com matriz incluindo 3.10.

Checklist
- [ ] Matriz de CI inclui 3.10
- [ ] Dependências compatíveis revisadas


