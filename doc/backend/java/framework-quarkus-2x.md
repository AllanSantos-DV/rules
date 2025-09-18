---
id: backend.java.framework.quarkus.2x
title: Quarkus 2.x — Diretrizes de desenvolvimento
type: framework
scope: [backend, java]
---

# <!-- desc: Versão estável; bom para apps consolidadas; suporte a GraalVM. -->
# [backend.java.framework.quarkus.2x]
## Foco para desenvolvimento

- Java 11/17; bom suporte a GraalVM nativo (otimize build times).
- Extensões via `quarkus-extensions`; RESTEasy Classic (2.x).

Checklist
- [ ] Configurar perfis `application-*.properties`
- [ ] Habilitar dev services para DB quando viável
- [ ] Avaliar build nativo (GraalVM) para footprint

Ver também
- `# [global.comments-docs]`

# [backend.java.framework.quarkus.2x.platform]
## Plataforma e compatibilidade

- Java 11/17; Quarkus 2.x com RESTEasy Classic/JAX-RS.
- GraalVM nativo suportado; avaliar versões de toolchain.

Checklist
- [ ] Versão de Java definida (11/17)
- [ ] Extensões compatíveis com 2.x
- [ ] Toolchain para nativo verificada


# [backend.java.framework.quarkus.2x.api]
## API REST

- RESTEasy Classic; considerar RESTEasy Reactive apenas em 2.7+ (com cautela).
- DTOs com Bean Validation (javax) e OpenAPI via SmallRye 2.x.

Checklist
- [ ] Endpoints JAX-RS padronizados
- [ ] Validação Jakarta/Bean Validation


# [backend.java.framework.quarkus.2x.security]
## Segurança

# [backend.java.framework.quarkus.2x.auth]
## Autenticação

- OIDC com `quarkus-oidc`; JWT assinado (RS256/ES256) e validação de audience.
- Sessão quando necessário via cookies seguros; CORS/headers no undertow/vertx.

Checklist
- [ ] OIDC/JWT configurados
- [ ] Cookies/CORS/headers seguros


# [backend.java.framework.quarkus.2x.lombok]
## Lombok e redução de boilerplate

- Em projetos Quarkus (RESTEasy/JPA), usar `@Getter/@Setter`/`@Builder` quando fizer sentido.
- Evitar `@Data` em entidades JPA; controlar `equals/hashCode` por chave.

Checklist
- [ ] Annotation processing
- [ ] Anotações adequadas por tipo
- [ ] Igualdade segura em entidades

- `quarkus-oidc` para OAuth2/OIDC; `quarkus-security` para RBAC.
- CORS e headers de segurança via `quarkus.http.cors` e filtros.

Checklist
- [ ] OIDC/JWT configurados (se aplicável)
- [ ] CORS e headers aplicados


# [backend.java.framework.quarkus.2x.obs]
## Observabilidade

- SmallRye Health/Metrics/Tracing 2.x.
- Exporters Prometheus/OTLP conforme stack.

Checklist
- [ ] Health/metrics/tracing habilitados
- [ ] Segurança nos endpoints


# [backend.java.framework.quarkus.2x.openapi]
## OpenAPI

- SmallRye OpenAPI 2.x; UI em `/q/swagger-ui`.

Checklist
- [ ] Dependências SmallRye
- [ ] Contratos atualizados


# [backend.java.framework.quarkus.2x.config]
## Configuração

- `application.properties|yaml` com perfis `%dev`, `%test`, `%prod`.

Checklist
- [ ] Perfis definidos
- [ ] Segredos fora do VCS


# [backend.java.framework.quarkus.2x.persistence]
## Persistência

- Panache/JPA ou JDBC; migrações com Flyway/Liquibase.

Checklist
- [ ] Estratégia de migração
- [ ] ÍNDICES e transações revisados


# [backend.java.framework.quarkus.2x.native]
## Native image (GraalVM)

- Configurar `quarkus.native.*`; checar reflexões e recursos estáticos.

Checklist
- [ ] Build nativo validado
- [ ] Relatório de substituições/reflexões revisado


# [backend.java.framework.quarkus.2x.testing]
## Testes

- `@QuarkusTest`; Testcontainers para integração.

Checklist
- [ ] Cobertura mínima
- [ ] Testes de integração com containers

