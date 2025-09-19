---
id: backend.python.version.3_8
title: Python 3.8 — Diretrizes de desenvolvimento
type: version
scope: [backend, python]
---

# <!-- desc: Versão estável; boa compatibilidade com bibliotecas legadas. -->
# [backend.python.version.3_8]
## Práticas específicas de Python 3.8

- Usar `:=` (walrus) com parcimônia para clareza.
- Tipagem com `typing` e `TypedDict`/`Protocol` quando aplicável.

Checklist
- [ ] Adotar type hints em módulos públicos
- [ ] Configurar linters (flake8/ruff) e mypy


# [backend.python.version.3_8.tooling]
## Tooling e compatibilidade

- Fixar versões de libs para compatibilidade; CI com matriz incluindo 3.8.

Checklist
- [ ] Matriz de CI inclui 3.8
- [ ] Pin de dependências crítico


