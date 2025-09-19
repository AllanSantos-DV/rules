---
id: backend.java.framework.quarkus.3x
title: Quarkus 3.x — Diretrizes de desenvolvimento
type: framework
scope: [backend, java]
---

# <!-- desc: Versão nova; Java 17+; RESTEasy Reactive e melhorias de performance. -->
# [backend.java.framework.quarkus.3x]
## Foco para desenvolvimento

- Requer Java 17+; RESTEasy Reactive; novo BOM de dependências.
- Observabilidade unificada; suporte first-class a HTTP/Reactive.

Checklist
- [ ] Migrar para RESTEasy Reactive quando possível
- [ ] Validar extensões compatíveis 3.x
- [ ] Ajustar pipelines para build nativo/containers

# [backend.java.framework.quarkus.3x.platform]
## Plataforma e compatibilidade

- Java 17+; Quarkus 3.x migra para Jakarta (`jakarta.*`).
- RESTEasy Reactive por padrão (melhor throughput e consumo).

Checklist
- [ ] Java 17+ confirmado
- [ ] Dependências Jakarta compatíveis
- [ ] Extensões revisadas para 3.x


# [backend.java.framework.quarkus.3x.api]
## API REST (Reactive)

- Preferir RESTEasy Reactive; endpoints com non-blocking IO quando possível.
- Validar integração com Virtual Threads (Java 21) se optar por modelo bloqueante.

Checklist
- [ ] Endpoints adequados ao modelo reativo
- [ ] Backpressure e timeouts definidos


# [backend.java.framework.quarkus.3x.security]
## Segurança

# [backend.java.framework.quarkus.3x.auth]
## Autenticação

- OIDC com `quarkus-oidc`; JWT; RBAC por roles em annotations/interceptors.
- Tokens curtos + refresh; CORS/headers e cookies seguros quando aplicável.

Checklist
- [ ] OIDC/JWT e RBAC definidos
- [ ] CORS/headers/cookies seguros


# [backend.java.framework.quarkus.3x.lombok]
## Lombok e redução de boilerplate

- `@Getter/@Setter`, `@Builder`, `@RequiredArgsConstructor` em services/utilitários.
- Evitar `@Data` em entidades Panache/JPA; definir `equals/hashCode`.

Checklist
- [ ] Processamento de anotações habilitado
- [ ] Anotações aplicadas corretamente
- [ ] Igualdade/hashCode revisados

- OIDC/JWT via `quarkus-oidc`; RBAC por roles.
- CORS e cabeçalhos de segurança configurados.

Checklist
- [ ] OIDC configurado (se aplicável)
- [ ] CORS e headers ativos


# [backend.java.framework.quarkus.3x.obs]
## Observabilidade

- SmallRye Health/Metrics/Tracing atualizados; OTLP/Prometheus.

Checklist
- [ ] Health/metrics/tracing habilitados e seguros
- [ ] Amostragem de traces definida


# [backend.java.framework.quarkus.3x.openapi]
## OpenAPI

- SmallRye OpenAPI 3.x; UI em `/q/swagger-ui`.

Checklist
- [ ] Dependências atualizadas
- [ ] Contratos consistentes com implementação


# [backend.java.framework.quarkus.3x.config]
## Configuração

- `application.yml`/`properties` com perfis `%dev/%test/%prod`.

Checklist
- [ ] Perfis definidos
- [ ] Segredos fora do VCS


# [backend.java.framework.quarkus.3x.persistence]
## Persistência

- Panache Reactive/ORM; migrações com Flyway/Liquibase.

Checklist
- [ ] Migração definida
- [ ] Índices/locks revisados


# [backend.java.framework.quarkus.3x.native]
## Native/AOT

- Avaliar GraalVM Native; configurar substituições/reflexões.

Checklist
- [ ] Build nativo validado
- [ ] Métricas de startup/heap coletadas


# [backend.java.framework.quarkus.3x.testing]
## Testes

- `@QuarkusTest`; Testcontainers; testes reativos quando aplicável.

Checklist
- [ ] Cobertura mínima
- [ ] Testes de integração com containers

