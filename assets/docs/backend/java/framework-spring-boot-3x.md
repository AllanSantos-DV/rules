---
id: backend.java.framework.spring-boot.3x
title: Spring Boot 3.x — Diretrizes de desenvolvimento
type: framework
scope: [backend, java]
---

# <!-- desc: Versão mais nova; requer Java 17+ e Jakarta; foco em REST e observabilidade. -->
# [backend.java.framework.spring-boot.3x]
## Foco para desenvolvimento

- Requer Java 17+; Jakarta EE 9+ (pacotes `jakarta.*`).
- Use `springdoc-openapi 2.x`; migre anotações se necessário.
- Observabilidade: Micrometer/Tracing por padrão.

Checklist
- [ ] Validar compatibilidade de libs com Spring Boot 3.x
- [ ] Ajustar imports `javax.*` → `jakarta.*`
- [ ] Configurar `springdoc` 2.x e endpoints de documentação
- [ ] Preferir `@ConfigurationProperties` para configs tipadas

Ver também
- `# [global.anti-duplication]`
- `# [global.agent-folder.postchange-trigger]`

# [backend.java.framework.spring-boot.3x.platform]
## Plataforma e compatibilidade

- Java 17+ obrigatório; use `--release 17` (ou superior) na build.
- Jakarta EE 9+: pacotes `jakarta.*` em vez de `javax.*` (validação, JPA, etc.).
- Spring Framework 6; Spring Security 6; Spring Data 2024.x.

Checklist
- [ ] Build configurada para Java 17+
- [ ] Dependências atualizadas (Jakarta, Spring 6)
- [ ] Bibliotecas externas compatíveis com Boot 3.x


# [backend.java.framework.spring-boot.3x.api]
## API: MVC vs WebFlux (decisão)

- MVC (blocking) para I/O tradicional e simplicidade.
- WebFlux (reactive) para alta concorrência e backpressure.

Checklist
- [ ] Escolha explícita: MVC ou WebFlux
- [ ] Alinhar escolha ao uso de Virtual Threads (ver `backend.java.version.21`)


# [backend.java.framework.spring-boot.3x.security]
## Segurança (Spring Security 6)

# [backend.java.framework.spring-boot.3x.auth]
## Autenticação

- JWT com `spring-boot-starter-oauth2-resource-server` (stateless) ou sessões seguras.
- OIDC com `spring-security-oauth2-client` (PKCE, redirect seguro, scopes mínimos).
- Password hashing com BCrypt/Argon2; MFA quando aplicável.

Checklist
- [ ] Fluxo JWT/OIDC definido
- [ ] CORS e cookies/headers seguros
- [ ] Política de expiração/refresh tokens


# [backend.java.framework.spring-boot.3x.lombok]
## Lombok e redução de boilerplate

- Annotation processing habilitado; `@RequiredArgsConstructor` para injeção via construtor.
- `@Builder`/`@Value` para DTOs imutáveis; evitar `@Data` em entidades JPA.
- Anotar `@EqualsAndHashCode(onlyExplicitlyIncluded = true)` em entidades com chave.

Checklist
- [ ] Processadores ativos
- [ ] Anotações corretas por tipo
- [ ] Igualdade/hashCode revisados

- Configuração via `SecurityFilterChain` (beans/lambdas).
- Padrão: CSRF habilitado para sessões; desabilite em APIs stateless com JWT.

Checklist
- [ ] Definido `SecurityFilterChain`
- [ ] Autenticação/Autorização testadas
- [ ] Políticas de CORS para APIs


# [backend.java.framework.spring-boot.3x.obs]
## Observabilidade

- Actuator habilitado; Micrometer + Tracing.
- Exporters: Prometheus/OTLP conforme plataforma.

Checklist
- [ ] Endpoints Actuator mínimos: health, info, metrics
- [ ] Tracing habilitado (amostragem definida)
- [ ] Dashboards/alerts referenciados


# [backend.java.framework.spring-boot.3x.openapi]
## OpenAPI (springdoc 2.x)

- Usar `springdoc-openapi-starter-webmvc-ui` (ou webflux-ui) 2.x.
- Anotações Jakarta; URLs de docs: `/v3/api-docs`, `/swagger-ui.html`.

Checklist
- [ ] Dependência `springdoc` 2.x
- [ ] Schemas e responses revisados
- [ ] Geração de contrato no CI


# [backend.java.framework.spring-boot.3x.config]
## Configuração e propriedades

- Preferir `@ConfigurationProperties` + validação Jakarta.
- Perfis (`spring.profiles.active`) para separar ambientes.

Checklist
- [ ] Propriedades tipadas com validação
- [ ] Perfis definidos (dev/test/prod)
- [ ] Segredos via variáveis de ambiente/cofre


# [backend.java.framework.spring-boot.3x.persistence]
## Persistência (quando aplicável)

- Spring Data (JPA/JDBC) com migrações (Flyway/Liquibase).
- Naming, transações e versionamento otimizados.

Checklist
- [ ] Estratégia de migração definida
- [ ] Transações e locks revisados
- [ ] Índices essenciais criados


# [backend.java.framework.spring-boot.3x.native]
## Native/AOT (opcional)

- Habilitar AOT; avaliar native image (GraalVM/Native Build Tools).
- Medir cold start e footprint; validar compatibilidade de libs.

Checklist
- [ ] Build AOT/native validada (se necessária)
- [ ] Métricas de startup/heap coletadas


# [backend.java.framework.spring-boot.3x.testing]
## Testes

- JUnit 5; `spring-boot-starter-test` 3.x.
- Testes slice (`@WebMvcTest`, `@DataJpaTest`) e integração com Testcontainers (quando DB).

Checklist
- [ ] Cobertura mínima acordada
- [ ] Slices configurados
- [ ] Testcontainers em integração (se DB)

