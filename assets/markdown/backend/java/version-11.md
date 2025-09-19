---
id: backend.java.version.11
title: Java 11 — Diretrizes de desenvolvimento
type: version
scope: [backend, java]
---

# <!-- desc: LTS estável; ideal para projetos consolidados e migração segura. -->
# [backend.java.version.11]
## Práticas específicas de Java 11

- LTS estável; foco em migração segura a partir de 8.
- Usar `var` em variáveis locais quando aumentar a legibilidade.
- Preferir HTTP Client (java.net.http) para chamadas HTTP.

Checklist
- [ ] Migrar APIs antigas (javax) conforme necessário
- [ ] Adotar HTTP Client padrão
- [ ] Validar compatibilidade de dependências

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
 - `# [global.agent-folder.precheck]`
 - `# [global.agent-folder.postchange-trigger]`


# [backend.java.version.11.language]
## Linguagem e APIs

- `var` para legibilidade (evitar em APIs públicas); `java.net.http` como cliente HTTP padrão.
- Módulos (quando aplicável); remover APIs removidas entre 8→11.

Checklist
- [ ] Uso criterioso de `var`
- [ ] HTTP Client adotado
- [ ] Limpeza de APIs/flags legacy


# [backend.java.version.11.gc]
## GC e performance

- G1GC como padrão; revisar parâmetros somente com evidência.

Checklist
- [ ] Métricas de GC coletadas
- [ ] Sem tuning prematuro


# [backend.java.version.11.tooling]
## Tooling e build

- `--release 11` na compilação; CI em JDK 11.

Checklist
- [ ] Compilação e testes em JDK 11
- [ ] Pipelines atualizados


