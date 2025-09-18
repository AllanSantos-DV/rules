---
id: backend.python.framework.django
title: Django — Diretrizes de desenvolvimento
type: framework
scope: [backend, python]
---

# <!-- desc: Framework completo com ORM integrado e admin; ideal para apps robustas. -->
# [backend.python.framework.django]
## Diretrizes

- Usar apps coesos; settings por ambiente; ORM e migrations consistentes.
- Segurança: CSRF, XSS, headers; usar `SECURE_*` em produção.

Checklist
- [ ] `INSTALLED_APPS` mínimos e organizados
- [ ] Configurações segregadas por ambiente
- [ ] Tests para models, views e forms/serializers
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [backend.python.framework.django.platform]
## Plataforma e compatibilidade

- Python 3.10/3.12 recomendados; verificar versão de Django (LTS atual).

Checklist
- [ ] Versão de Python alinhada
- [ ] Dependências compatíveis com Django


# [backend.python.framework.django.apps]
## Estrutura de apps e configurações

- Apps coesos; `settings` por ambiente; `INSTALLED_APPS` mínimos.

Checklist
- [ ] Separação de settings (dev/test/prod)
- [ ] Apps com responsabilidades claras


# [backend.python.framework.django.security]
## Segurança

# [backend.python.framework.django.auth]
## Autenticação

- Auth nativo do Django; `django-allauth`/OIDC quando necessário.
- Password validators, rotação, e políticas de reset; MFA quando aplicável.

Checklist
- [ ] Fluxo auth definido (nativo/OIDC)
- [ ] Password validators e MFA (se aplicável)

- CSRF, XSS, `SECURE_*` em produção; `ALLOWED_HOSTS` definido.

Checklist
- [ ] Configurações `SECURE_*` e `ALLOWED_HOSTS`
- [ ] Política de CORS (se API)


# [backend.python.framework.django.orm]
## ORM e migrações

- Modelos consistentes; migrações versionadas; constraints e índices.

Checklist
- [ ] Migrações revisadas
- [ ] Índices/constraints essenciais


# [backend.python.framework.django.openapi]
## OpenAPI (DRF)

- Com DRF, gerar schema (drf-spectacular/other) e publicar docs.

Checklist
- [ ] Schema OpenAPI gerado
- [ ] Endpoints de docs expostos (se aplicável)


# [backend.python.framework.django.testing]
## Testes

- `pytest`/`unittest`; testes para models/views/serializers.

Checklist
- [ ] Cobertura mínima
- [ ] Testes de integração


