---
id: desktop.python.version.3.13
title: Python 3.13 — Diretrizes específicas (Desktop)
type: version
scope: [desktop, python]
---

# <!-- desc: Última versão estável; melhorias de desempenho e bibliotecas atualizadas. -->
# [desktop.python.version.3.13]
## Foco para desenvolvimento

- Confirmar compatibilidade das libs desktop (PySide6/Tkinter/Kivy) com 3.13.
- Ajustar toolchain (builds nativos, empacotadores) para 3.13.

Checklist
- [ ] Compatibilidade de libs
- [ ] Pip/uv/poetry alinhados


# [desktop.python.version.3.13.tooling]
## Ferramental

- `uv`/poetry para lockfile; `ruff`/`black`/`mypy` (quando aplicável) para qualidade.

Checklist
- [ ] Linter e formatador
- [ ] Tipagem opcional


