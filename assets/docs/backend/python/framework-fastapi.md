---
id: backend.python.framework.fastapi
title: FastAPI — Diretrizes de desenvolvimento
type: framework
scope: [backend, python]
---

# <!-- desc: Framework moderno e performático para APIs; tipagem forte com Pydantic. -->
# [backend.python.framework.fastapi]
## Diretrizes

- Tipagem e Pydantic para validação; dependências via `Depends`.
- Documentação OpenAPI automática; versionamento de rotas.

Checklist
- [ ] Modelos Pydantic para entrada/saída
- [ ] Dependências e segurança com `Depends`
- [ ] Testes com `httpx`/`pytest`


# [backend.python.framework.fastapi.platform]
## Plataforma e compatibilidade

- Python 3.10/3.12 recomendados; FastAPI + Uvicorn/Hypercorn; Pydantic v2.

Checklist
- [ ] Versões de Python/FastAPI/Pydantic alinhadas
- [ ] Servidor ASGI definido (Uvicorn/Hypercorn)


# [backend.python.framework.fastapi.routing]
## Roteamento e estrutura

- Routers por domínio; versionamento (`/v1`, `/v2`); dependências por router.

Checklist
- [ ] Routers modulares
- [ ] Versionamento aplicado


# [backend.python.framework.fastapi.security]
## Segurança

# [backend.python.framework.fastapi.auth]
## Autenticação

- OAuth2/JWT com `OAuth2PasswordBearer` e flows adequados; OIDC via libs externas.
- CORS/cookies/headers seguros; rotação de tokens quando aplicável.

Checklist
- [ ] Fluxo de auth definido (password, client, code)
- [ ] CORS/cookies/headers e expiração configurados

- OAuth2/JWT com `OAuth2PasswordBearer`; CORS e headers de segurança.

Checklist
- [ ] Fluxo de auth definido
- [ ] CORS/headers ativos


# [backend.python.framework.fastapi.openapi]
## OpenAPI

- Documentação automática; personalização de schemas; tags e responses.

Checklist
- [ ] Schemas revisados
- [ ] Tags/responses padronizados


# [backend.python.framework.fastapi.persistence]
## Persistência

- SQLAlchemy + Alembic; sessões assíncronas quando necessário.

Checklist
- [ ] Alembic configurado
- [ ] Índices/constraints essenciais


# [backend.python.framework.fastapi.obs]
## Observabilidade

- Logging estruturado; Prometheus/OTEL; middlewares de tracing.

Checklist
- [ ] Logs, métricas e traces


# [backend.python.framework.fastapi.performance]
## Performance

- Tune de workers/loop; validação Pydantic v2 (BaseModel/Validation); profiling quando necessário.

Checklist
- [ ] Workers e loop ajustados
- [ ] Perf monitorada


# [backend.python.framework.fastapi.testing]
## Testes

- pytest + httpx/AsyncClient; fixtures para DB/redis.

Checklist
- [ ] Cobertura mínima
- [ ] Integração com containers


