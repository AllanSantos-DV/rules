---
id: desktop.windows.distribution
title: Distribuição — Windows (empacotamento e atualização)
type: distribution
scope: [desktop]
---

# <!-- desc: Empacotamento, assinatura e atualização automática para Windows. -->
# [desktop.windows.distribution]
## Diretrizes

- Empacotar com `PyInstaller`/`cx_Freeze`; reduzir tamanho (excluir debug/tests).
- Assinatura de código (Authenticode); política de updates (Squirrel/WinSparkle/auto-updater).

Checklist
- [ ] Empacotamento definido (PyInstaller/cx_Freeze)
- [ ] Assinatura e certificado
- [ ] Estratégia de atualização


# [desktop.windows.distribution.install]
## Instalação e requisitos

- Redistribuíveis do MSVC; permissões padrão; diretórios de dados configurados.

Checklist
- [ ] Redistribuível instalado
- [ ] Pastas de dados e logs


