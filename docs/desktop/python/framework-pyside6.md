---
id: desktop.python.framework.pyside6
title: PySide6 — Diretrizes de desenvolvimento
type: framework
scope: [desktop, python]
---

# <!-- desc: Qt para Python; UI nativa, MVVM e componentes reutilizáveis. -->
# [desktop.python.framework.pyside6]
## Diretrizes

- Estruturar por camadas (domain/application/ui) e por módulos; preferir MVVM.
- Reutilizar componentes (widgets) com propriedades e sinais bem definidos.

Checklist
- [ ] Estrutura modular definida
- [ ] MVVM escolhido e aplicado
- [ ] Componentes/Widgets reutilizáveis mapeados


# [desktop.python.framework.pyside6.platform]
## Plataforma e compatibilidade

- Python 3.13; PySide6 LTS disponível; empacotamento para Windows (MSVC runtime).

Checklist
- [ ] Versões PySide6/Python compatíveis
- [ ] Dependências nativas/Qt validadas


# [desktop.python.framework.pyside6.arch]
## Arquitetura (MVVM recomendado)

- View em Qt Designer/QML ou widgets; ViewModel como orquestrador; Model encapsula domínio.
- Sinais/slots para comunicação; bindings unidirecionais sempre que possível.

Checklist
- [ ] View, ViewModel e Model separados
- [ ] Sinais/slots documentados
- [ ] Bindings e atualização de estado previsíveis


# [desktop.python.framework.pyside6.modules]
## Módulos e componentes reutilizáveis

- Pacotes por domínio; widgets em pacotes `ui/components`; estilos centralizados.
- Testes unitários dos componentes; evitar acoplamento com singletons.

Checklist
- [ ] Pacotes por domínio e `ui/components`
- [ ] Testes unitários de componentes


# [desktop.python.framework.pyside6.a11y]
## Acessibilidade

- Labels/roles; navegação por teclado; alto contraste opcional.

Checklist
- [ ] Roles e labels corretos
- [ ] Navegação por teclado


# [desktop.python.framework.pyside6.security]
## Segurança e dados locais

- Criptografar segredos/credenciais; evitar hardcode; políticas de atualização.

Checklist
- [ ] Segredos protegidos
- [ ] Política de update


# [desktop.python.framework.pyside6.i18n]
## Internacionalização

- `Qt Linguist`/traduções; separar strings; fallback para pt-BR/en-US.

Checklist
- [ ] Catálogo de traduções
- [ ] Processo de build de `.qm`


# [desktop.python.framework.pyside6.performance]
## Performance e responsividade

- Evitar trabalho pesado no thread da UI; mover I/O para threads/tarefas.
- Usar Worker/QRunnable/QThreadPool; progress feedback e cancelamento.

Checklist
- [ ] UI responsiva (sem travamentos)
- [ ] Tarefas pesadas fora do main thread


# [desktop.python.framework.pyside6.testing]
## Testes

- pytest + `pytest-qt`; testes de ViewModel isolados; testes de integração da UI quando crítico.

Checklist
- [ ] Testes de ViewModel
- [ ] Testes de integração essenciais


