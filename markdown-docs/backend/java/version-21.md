---
id: backend.java.version.21
title: Java 21 — Diretrizes de desenvolvimento
type: version
scope: [backend, java]
---

# <!-- desc: LTS mais recente; Virtual Threads e Structured Concurrency. -->
# [backend.java.version.21]
## Práticas específicas de Java 21

- Virtual Threads (Project Loom) para I/O bloqueante e alta concorrência.
- Structured Concurrency para coordenação de tarefas concorrentes.
- Melhorias de pattern matching e sequenced collections.

Recomendações
- Usar `Executors.newVirtualThreadPerTaskExecutor()` para workloads I/O-bound.
- Evitar sobrecarregar com threads virtuais para CPU-bound; usar paralelismo/streams conforme adequado.
- Monitorar uso de recursos e backpressure.

Checklist
- [ ] Avaliar migração de pools tradicionais para virtual threads
- [ ] Isolar blocos I/O-bound em virtual threads
- [ ] Medir throughput/latências antes e depois

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [backend.java.version.21.language]
## Linguagem e APIs

- Pattern Matching aprimorado; Sequenced Collections; atualizações nas bibliotecas.

Checklist
- [ ] Uso criterioso de novas APIs
- [ ] Compatibilidade de libs validada


# [backend.java.version.21.virtual-threads]
## Virtual Threads (Project Loom)

- Preferir em I/O bloqueante; atenção a escopos e bloqueios implícitos.

Checklist
- [ ] Pool virtual thread aplicado onde adequado
- [ ] Monitoração e backpressure


# [backend.java.version.21.structured]
## Structured Concurrency

- Usar `StructuredTaskScope` para coordenação/tempo-limite/cancelamento.

Checklist
- [ ] Escopos definidos
- [ ] Cancelamento/timeouts testados


# [backend.java.version.21.tooling]
## Tooling e build

- `--release 21`; CI em JDK 21; medir ganhos versus 17.

Checklist
- [ ] Compilação/testes em JDK 21
- [ ] Métricas de performance antes/depois


