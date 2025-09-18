---
id: backend.java.framework.micronaut.4x
title: Micronaut 4.x — Diretrizes de desenvolvimento
type: framework
scope: [backend, java]
---

# <!-- desc: Requer Java 17+; AOT e observabilidade melhoradas; integrações atualizadas. -->
# [backend.java.framework.micronaut.4x]
## Foco para desenvolvimento

- Requer Java 17+; melhorias em AOT e observabilidade.
- Integrações atualizadas (Data, Security, Serde JSON).

Checklist
- [ ] Validar compatibilidade de módulos 4.x
- [ ] Utilizar Serde nativa (Jackson opcional)
- [ ] Avaliar build nativo (GraalVM) quando benéfico

# [backend.java.framework.micronaut.4x.platform]
## Plataforma e compatibilidade

- Java 17+; Jakarta/Modules atualizados; AOT aprimorado.

Checklist
- [ ] Java 17+ confirmado
- [ ] Módulos Micronaut 4.x compatíveis


# [backend.java.framework.micronaut.4x.api]
## API HTTP

- Micronaut HTTP Server; validação Jakarta; Serde nativa para JSON.

Checklist
- [ ] Endpoints e validação
- [ ] Serde configurado (Jackson opcional)


# [backend.java.framework.micronaut.4x.security]
## Segurança

# [backend.java.framework.micronaut.4x.auth]
## Autenticação

- `micronaut-security` (JWT/OAuth2/OIDC) 4.x com melhorias; PKCE quando aplicável.
- Cookies/headers e CORS; rotação de chaves e expiração.

Checklist
- [ ] Fluxo auth definido
- [ ] CORS/headers/cookies seguros


# [backend.java.framework.micronaut.4x.lombok]
## Lombok e redução de boilerplate

- `@Getter/@Setter`, `@Builder`, `@Value`; `@RequiredArgsConstructor` em services.
- Evitar `@Data` em entidades; `equals/hashCode` consistentes.

Checklist
- [ ] Processamento de anotações habilitado
- [ ] Anotações corretas por tipo
- [ ] Igualdade/hashCode revisados

- `micronaut-security` atualizado (JWT/OAuth2/OIDC) com melhorias.

Checklist
- [ ] Autenticação/Autorização
- [ ] CORS/headers


# [backend.java.framework.micronaut.4x.obs]
## Observabilidade

- Micrometer/Tracing integrados; exporters OTLP/Prometheus.

Checklist
- [ ] Métricas/health/traces habilitados
- [ ] Painéis/alertas definidos


# [backend.java.framework.micronaut.4x.openapi]
## OpenAPI

- Micronaut OpenAPI; geração automática com anotações.

Checklist
- [ ] Dependências e geração
- [ ] Contratos no CI


# [backend.java.framework.micronaut.4x.config]
## Configuração

- `application.yml` + profiles; propriedades tipadas.

Checklist
- [ ] Perfis dev/test/prod
- [ ] Segredos externos


# [backend.java.framework.micronaut.4x.persistence]
## Persistência

- Micronaut Data (ORM/JDBC); migrações Flyway/Liquibase.

Checklist
- [ ] Migração definida
- [ ] Índices/locks revisados


# [backend.java.framework.micronaut.4x.native]
## Native/AOT

- AOT melhorado; revisar reflexões/substituições.

Checklist
- [ ] Build nativo/AOT validado
- [ ] Métricas de startup/heap


# [backend.java.framework.micronaut.4x.testing]
## Testes

- JUnit 5; Testcontainers; testes HTTP.

Checklist
- [ ] Cobertura mínima
- [ ] Integração com containers

