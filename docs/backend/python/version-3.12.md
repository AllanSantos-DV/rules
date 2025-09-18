---
id: backend.python.version.3_12
title: Python 3.12 — Diretrizes de desenvolvimento
type: version
scope: [backend, python]
---

# <!-- desc: Versão mais recente; ganhos de performance e atualizações no typing. -->
# [backend.python.version.3_12]
## Práticas específicas de Python 3.12

- Melhorias de performance no interpretador e no `typing` (PEP 695/PEP 701 contexto dependente — ajustar conforme doc oficial).
- Remoções/Deprecações: revisar `distutils` removido; ajustar toolchain.

Checklist
- [ ] Validar compatibilidade de dependências para 3.12
- [ ] Ajustar builds (pip/setuptools) sem `distutils`
- [ ] Avaliar novas features de `typing` quando benéficas


# [backend.python.version.3_12.tooling]
## Tooling e compatibilidade

- Ajustar toolchain para 3.12; usar `pyproject.toml`; CI em 3.12.

Checklist
- [ ] Matriz de CI inclui 3.12
- [ ] Toolchain modernizada (pip/setuptools/uv)


