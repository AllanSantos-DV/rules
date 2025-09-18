---
id: backend.java.framework.spring-boot.2x
title: Spring Boot 2.x — Diretrizes de desenvolvimento
type: framework
scope: [backend, java]
---

# <!-- desc: Versão estável, ampla compatibilidade; ideal para projetos consolidados. -->
# [backend.java.framework.spring-boot.2x]
## Foco para desenvolvimento

- Compatível com Java 8–17; priorize LTS (11/17) no projeto.
- Starter dependencies (web, validation, actuator) com versões compatíveis 2.x.
- Configurações em `application.yml`; perfis por ambiente.

Checklist
- [ ] Usar `spring-boot-starter-web` para APIs REST
- [ ] Validar entradas com `spring-boot-starter-validation`
- [ ] Habilitar `actuator` com endpoints mínimos e segurança
- [ ] Documentar com OpenAPI (springdoc 1.x)

Ver também
- `# [global.comments-docs]`
- `# [global.agent-folder.precheck]`

# [backend.java.framework.spring-boot.2x.platform]
## Plataforma e compatibilidade

- Java 8–17 suportado; preferir LTS (11/17) conforme dependências.
- Spring Framework 5.x; Jakarta ainda não obrigatório (javax.* em uso).

Checklist
- [ ] Versão alvo de Java definida (11/17)
- [ ] Dependências compatíveis com Spring 5.x
- [ ] Bibliotecas externas testadas em Boot 2.x


# [backend.java.framework.spring-boot.2x.api]
## API: MVC (blocking)

- Padrão: Spring MVC com servlet container.
- Para concorrência elevada, avaliar tuning de pools/IO ou migração gradual.

Checklist
- [ ] MVC confirmado
- [ ] Tuning básico de thread pool


# [backend.java.framework.spring-boot.2x.security]
## Segurança (Spring Security 5)

# [backend.java.framework.spring-boot.2x.auth]
## Autenticação

- Stateless: JWT com `spring-boot-starter-oauth2-resource-server`.
- Stateful: sessão com cookies seguras (CSRF habilitado onde aplicável).
- OAuth2/OIDC: `spring-security-oauth2-client` para login/social/IdP corporativo.
- Hash de senha: `BCryptPasswordEncoder` e política de expiração/rotação.

Checklist
- [ ] Fluxo escolhido (JWT/sessão/OIDC)
- [ ] Tempo de vida/refresh definidos
- [ ] Password encoder configurado


# [backend.java.framework.spring-boot.2x.lombok]
## Lombok e redução de boilerplate

- Habilitar annotation processing; usar `@RequiredArgsConstructor` para services.
- `@Builder`/`@Value` para DTOs imutáveis; evitar `@Data` em entidades JPA.
- `equals/hashCode` por identificador; manter construtor no-args para JPA.

Checklist
- [ ] Annotation processing ativo
- [ ] Anotações adequadas por tipo (DTO/entidade/service)
- [ ] Igualdade segura em entidades

- Configuração via `WebSecurityConfigurerAdapter` (2.x) ou chain progressiva.
- CSRF conforme contexto; JWT/Session de acordo com stateless/stateful.

Checklist
- [ ] Autenticação/Autorização configuradas
- [ ] CORS definido para APIs
- [ ] Senhas com BCrypt e políticas de expiração


# [backend.java.framework.spring-boot.2x.obs]
## Observabilidade

- Actuator 2.x com Micrometer; exporters conforme stack.

Checklist
- [ ] Health/info/metrics habilitados com segurança
- [ ] Métricas-chave definidas


# [backend.java.framework.spring-boot.2x.openapi]
## OpenAPI (springdoc 1.x)

- Utilizar `springdoc-openapi-ui` 1.x.
- Endpoints: `/v3/api-docs`, `/swagger-ui.html`.

Checklist
- [ ] Dependência `springdoc` 1.x
- [ ] Schemas coerentes


# [backend.java.framework.spring-boot.2x.config]
## Configuração e propriedades

- `@ConfigurationProperties` recomendado; profiles por ambiente.

Checklist
- [ ] Propriedades tipadas
- [ ] Perfis dev/test/prod definidos


# [backend.java.framework.spring-boot.2x.persistence]
## Persistência

- Spring Data JPA/JDBC; migrações com Flyway/Liquibase.

Checklist
- [ ] Estratégia de migração
- [ ] Índices e chaves revisados


# [backend.java.framework.spring-boot.2x.testing]
## Testes

- JUnit 5 (ou 4 com vintage); `spring-boot-starter-test` 2.x.

Checklist
- [ ] Cobertura mínima definida
- [ ] Testes slice e integração

