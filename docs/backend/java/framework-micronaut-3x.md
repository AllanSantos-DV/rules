---
id: backend.java.framework.micronaut.3x
title: Micronaut 3.x — Diretrizes de desenvolvimento
type: framework
scope: [backend, java]
---

# <!-- desc: DI em compile-time; leve e rápido; ideal para microserviços. -->
# [backend.java.framework.micronaut.3x]
## Foco para desenvolvimento

- Java 11/17; injeção DI compile-time; baixo overhead.
- HTTP com Micronaut HTTP Server; validação e config tipada.

Checklist
- [ ] Habilitar annotation processors no build
- [ ] Configurar `application.yml` por ambiente
- [ ] Documentar endpoints com Micronaut OpenAPI

# [backend.java.framework.micronaut.3x.platform]
## Plataforma e compatibilidade

- Java 11/17; DI em compile-time (annotation processors). Baixo consumo.

Checklist
- [ ] Java alvo definido (11/17)
- [ ] Processadores de anotação habilitados


# [backend.java.framework.micronaut.3x.api]
## API HTTP

- Micronaut HTTP Server; validação com Jakarta Validation (em 3.x ainda `javax` comum).

Checklist
- [ ] Endpoints e validação definidos
- [ ] Tratamento de erros/uniformização de responses


# [backend.java.framework.micronaut.3x.security]
## Segurança

# [backend.java.framework.micronaut.3x.auth]
## Autenticação

- `micronaut-security` com JWT/OAuth2/OIDC; providers configurados por ambiente.
- Cookies/headers e CORS; políticas de expiração/refresh.

Checklist
- [ ] Fluxo auth definido
- [ ] CORS/headers/cookies seguros


# [backend.java.framework.micronaut.3x.lombok]
## Lombok e redução de boilerplate

- Usar `@Getter/@Setter`, `@Builder`, `@Value` onde adequado; injeção via construtor.
- Evitar `@Data` em entidades JPA; `equals/hashCode` por identificador.

Checklist
- [ ] Annotation processing ativo
- [ ] Anotações corretas por tipo
- [ ] Entidades com igualdade segura

- Módulo `micronaut-security` (JWT/OAuth2/OIDC).

Checklist
- [ ] Autenticação/Autorização configuradas
- [ ] CORS e headers de segurança


# [backend.java.framework.micronaut.3x.obs]
## Observabilidade

- Micrometer; endpoints de health/info/metrics.

Checklist
- [ ] Métricas e health habilitados
- [ ] Exporters configurados


# [backend.java.framework.micronaut.3x.openapi]
## OpenAPI

- Micronaut OpenAPI (swagger annotations); UI via Swagger.

Checklist
- [ ] Dependências OpenAPI
- [ ] Contratos gerados/atualizados


# [backend.java.framework.micronaut.3x.config]
## Configuração

- `application.yml` e profiles; propriedades tipadas.

Checklist
- [ ] Perfis por ambiente
- [ ] Segredos externos


# [backend.java.framework.micronaut.3x.persistence]
## Persistência

- Micronaut Data (JPA/JDBC); migrações Flyway/Liquibase.

Checklist
- [ ] Estratégia de migração
- [ ] Índices/locks revisados


# [backend.java.framework.micronaut.3x.native]
## Native/AOT

- Suporte a GraalVM; revisar reflexões/substituições.

Checklist
- [ ] Build nativo validado
- [ ] Métricas de startup/heap


# [backend.java.framework.micronaut.3x.testing]
## Testes

- JUnit 5, Testcontainers, testes HTTP.

Checklist
- [ ] Cobertura mínima
- [ ] Testes de integração com containers

