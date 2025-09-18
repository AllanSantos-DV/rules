---
id: desktop.python.framework.tkinter
title: Tkinter — Diretrizes de desenvolvimento
type: framework
scope: [desktop, python]
---

# <!-- desc: GUI padrão da CPython; simples e estável para utilitários desktop. -->
# [desktop.python.framework.tkinter]
## Diretrizes

- Estruturar por módulos/domínios; separar UI de lógica (MVC/MVVM leve).
- Reutilizar frames/widgets customizados; estilos centralizados (ttk themes).

Checklist
- [ ] Estrutura modular definida
- [ ] Widgets reutilizáveis


# [desktop.python.framework.tkinter.arch]
## Arquitetura

- Controladores/ViewModels intermediando UI ↔ domínio; evitar lógica na View.

Checklist
- [ ] Separação UI/domínio
- [ ] Controladores/ViewModels claros


# [desktop.python.framework.tkinter.performance]
## Performance e responsividade

- Evitar operações bloqueantes no mainloop; threads/queues para I/O/pesado.

Checklist
- [ ] UI responsiva
- [ ] I/O fora do mainloop


# [desktop.python.framework.tkinter.testing]
## Testes

- pytest; testes de serviços/domínio; smoke tests para UI quando necessário.

Checklist
- [ ] Testes de domínio
- [ ] Smoke tests de UI


