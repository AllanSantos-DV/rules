---
id: final
title: Final Guide
specVersion: 1.0
generatedAt: {{ISO_DATETIME_UTC}}
scope:
  domain: {{backend|web|desktop}}
  language: {{java|python|web}}
  framework: {{spring|fastapi|django|flask|react|angular|vue|base|pyside6|tkinter|kivy}}
  architecture: {{mvc|hexagonal|spa|ssr|microfrontends|mvvm}}
  version:
    java: {{11|17|21|null}}
    python: {{3.8|3.10|3.12|3.13|null}}
mustIncludeAnchors:
  - global.agent-folder
  - global.agent-folder.precheck
  - global.agent-folder.postchange-trigger
  - global.anti-duplication
  - global.decision-versioning
  - global.comments-docs
  - global.process-analysis
index:
  anchors:
    # Populated by the generator by scanning included files for lines starting with "# ["
    # Example entries (dynamic):
    - { id: "global.agent-folder", path: "# [global.agent-folder]" }
    - { id: "global.process-analysis", path: "# [global.process-analysis]" }
    - { id: "backend.java.arch.hexagonal", path: "# [backend.java.arch.hexagonal]" }
    - { id: "backend.java.version.21", path: "# [backend.java.version.21]" }
---

# [final.introduction]
## Como usar este guia

- Este documento consolida as seções globais e específicas da seleção do usuário.
- Use o índice em `index.anchors` para saltar diretamente para a seção desejada.

<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de docs/global/agent-folder.md -->
<!-- INCLUDE: docs/global/agent-folder.md -->

<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de docs/global/process-analysis.md -->
<!-- INCLUDE: docs/global/process-analysis.md -->

<!-- Depois, inserir os blocos específicos selecionados pelo usuário -->
<!-- INCLUDE: {{SELECTED_BLOCKS}} -->

# [final.validity]
## Validação do documento

- Este guia é válido somente se TODAS as âncoras de `mustIncludeAnchors` estiverem presentes no `index.anchors`.
- Se faltar alguma âncora obrigatória, o agente deve interromper, reportar o problema e solicitar a regeneração do documento final.
