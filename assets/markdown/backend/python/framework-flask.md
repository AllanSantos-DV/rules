---
id: backend.python.framework.flask
title: Flask — Diretrizes de desenvolvimento
type: framework
scope: [backend, python]
---

# <!-- desc: Microframework minimalista e flexível; ótimo para APIs e microserviços. -->
# [backend.python.framework.flask]
## Diretrizes

- Blueprints para modularidade; config por ambiente; extensões mínimas.
- Preferir pydantic/validação explícita em DTOs; gunicorn/uvicorn em produção.

Checklist
- [ ] Estrutura com blueprints
- [ ] Configs segregadas
- [ ] Testes para rotas e serviços
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [backend.python.framework.flask.platform]
## Plataforma e compatibilidade

- Python 3.10/3.12 recomendados; Flask 2.x/3.x conforme dependências.

Checklist
- [ ] Versão de Python e Flask alinhadas
- [ ] Extensões compatíveis revisadas


# [backend.python.framework.flask.structure]
## Estrutura, blueprints e configuração

- Modularizar com Blueprints; `config.py`/env vars por ambiente; extensões mínimas.

Checklist
- [ ] Blueprints por domínio/módulo
- [ ] Configs segregadas (dev/test/prod)
- [ ] Segredos via env/secret manager


# [backend.python.framework.flask.security]
## Segurança

# [backend.python.framework.flask.auth]
## Autenticação

- JWT com `flask-jwt-extended` ou OAuth2/OIDC via libs (Authlib, etc.).
- Políticas de expiração/refresh; cookies/headers e CORS ajustados.

Checklist
- [ ] JWT/OIDC definido
- [ ] Expiração/refresh e CORS/cookies seguros

- CORS configurado; headers de segurança; validação de entrada em DTOs.

Checklist
- [ ] CORS e headers ativos
- [ ] Validação em DTOs


# [backend.python.framework.flask.openapi]
## OpenAPI

- `flask-smorest`/apispec para schema e docs; publicar Swagger UI.

Checklist
- [ ] Schema gerado e publicado
- [ ] Contratos versionados


# [backend.python.framework.flask.persistence]
## Persistência

- SQLAlchemy + Alembic para migrações; conexão/Session por requisição.

Checklist
- [ ] Alembic configurado
- [ ] Índices/constraints essenciais


# [backend.python.framework.flask.obs]
## Observabilidade

- Logging estruturado; métricas (Prometheus/OTEL) e tracing quando aplicável.

Checklist
- [ ] Logs estruturados
- [ ] Métricas/traces integrados


# [backend.python.framework.flask.deploy]
## Deploy (WSGI/ASGI)

- WSGI: Gunicorn (+gevent) ou uWSGI; ASGI: Uvicorn/Hypercorn com asgiref se necessário.

Checklist
- [ ] Estratégia de servidor definida
- [ ] Healthcheck e readiness


# [backend.python.framework.flask.testing]
## Testes

- pytest; client de teste do Flask; fixtures para DB.

Checklist
- [ ] Cobertura mínima
- [ ] Testes de integração com DB


