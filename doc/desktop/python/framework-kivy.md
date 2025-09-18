---
id: desktop.python.framework.kivy
title: Kivy — Diretrizes de desenvolvimento
type: framework
scope: [desktop, python]
---

# <!-- desc: UI declarativa e multiplataforma; layouts responsivos e animações. -->
# [desktop.python.framework.kivy]
## Diretrizes

- Separar `.kv` (View) do Python (lógica); componentes reutilizáveis.

Checklist
- [ ] Estrutura `.kv`/Python separada
- [ ] Componentes reutilizáveis mapeados


# [desktop.python.framework.kivy.arch]
## Arquitetura

- MVVM/MVC conforme necessidade; bindings e propriedades observáveis.

Checklist
- [ ] ViewModel/Controller definido
- [ ] Bindings previsíveis


# [desktop.python.framework.kivy.performance]
## Performance

- Evitar bloqueio do loop; atualizar UI no thread correto; profiling em animações.

Checklist
- [ ] UI fluida
- [ ] Operações pesadas fora do loop


# [desktop.python.framework.kivy.testing]
## Testes

- pytest; testes de lógica; integração mínima de UI.

Checklist
- [ ] Testes de lógica
- [ ] Integração mínima de UI
