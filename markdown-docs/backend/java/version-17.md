---
id: backend.java.version.17
title: Java 17 — Diretrizes de desenvolvimento
type: version
scope: [backend, java]
---

# <!-- desc: LTS moderna; records, sealed classes e pattern matching. -->
# [backend.java.version.17]
## Práticas específicas de Java 17

- LTS moderna com records, sealed classes e pattern matching para `instanceof`.
- Aproveitar records para DTOs imutáveis e dados de domínio simples.
- Usar sealed hierarchies quando controle de extensões for necessário.

Checklist
- [ ] Avaliar substituição de POJOs simples por `record`
- [ ] Usar `instanceof` com pattern matching onde fizer sentido
- [ ] Definir hierarquias `sealed` para invariantes fortes

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
 - `# [global.agent-folder.precheck]`
 - `# [global.agent-folder.postchange-trigger]`


# [backend.java.version.17.language]
## Linguagem e APIs

- Records para DTOs/valores; sealed classes para invariantes; pattern matching para `instanceof`.

Checklist
- [ ] Records aplicados quando adequado
- [ ] Sealed hierarchies para restrições
- [ ] Pattern matching usado com critério


# [backend.java.version.17.gc]
## GC e performance

- G1/ZGC disponíveis; manter defaults e medir antes de tunar.

Checklist
- [ ] Métricas de GC
- [ ] Sem tuning prematuro


# [backend.java.version.17.tooling]
## Tooling e build

- `--release 17`; CI em JDK 17; checar compatibilidade de libs (Jakarta em frameworks 3.x).

Checklist
- [ ] Compilação/testes em JDK 17
- [ ] Dependências compatíveis


