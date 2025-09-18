---
id: global
title: Global — Pasta .agente, Anti-duplicação, Decisões, Documentação
type: global
scope: [all]
---

# [global.agent-folder]
## Estrutura e responsabilidades

- Estrutura obrigatória: `.agente/contexto.json`, `.agente/contexto.md`, `.agente/decisoes.log`, `.agente/pendencias.json`, `.agente/rastreamento/*`.
- Sem sobrescritas sem autorização; manter JSON e MD consistentes.
- Registrar decisões, inferências e pendências a cada iteração.

Checklist
- [ ] Ler `.agente/*` antes de gerar código
- [ ] Atualizar contexto e decisões após cada passo
- [ ] Bloquear implementação com pendências abertas

Ver também
- `# [global.anti-duplication]`
- `# [global.decision-versioning]`
- `# [global.comments-docs]`
- `# [global.process-analysis]`


# [global.agent-folder.sop]
## Procedimento operacional padrão (SOP) para o agente

Fluxo obrigatório a cada interação com o usuário:

1) Pré-checagem (antes de responder)
- Executar `# [global.agent-folder.precheck]`.
- Aplicar `# [global.process-analysis]` para análise estruturada do problema.
- Se faltas ou pendências bloqueantes forem detectadas, responder com o bloqueio e próxima ação objetiva.

2) Execução da ação solicitada
- Validar pendências relacionadas; se bloqueado, não prosseguir.
- Implementar a mudança mínima necessária (DRY, KISS, YAGNI).

3) Gatilho pós-implementação
- Executar `# [global.agent-folder.postchange-trigger]` imediatamente.

4) Registro e validação
- Conferir `rastreamento/*` e `contexto.json` consistentes.
- Adicionar linha em `decisoes.log` descrevendo a ação.

5) Comunicação ao usuário
- Informar resumo objetivo: o que foi feito, impacto e próximos passos (se houver).


# [global.agent-folder.edge-cases]
## Casos-limite e tratamento

- `.agente/` ausente: criar via `# [global.agent-folder.sync-command]` (ramo de criação).
- Divergência entre código e `rastreamento/*`: marcar pendência (severity=medium|high) e não sobrescrever automaticamente.
- Decisão antiga conflitante: registrar conflito e sugerir alternativa; não invalidar sem confirmação.
- Entradas duplicadas em rastreamento: consolidar e marcar `status` mais restritivo até revisão.
- Arquivos corrompidos/JSON inválido: criar backup (`*.bak`) e regenerar a partir do estado do projeto; registrar ocorrência.


# [global.agent-folder.ids]
## Geração de IDs e ordenação de eventos

- `decisoes.log`: linha cronológica, timestamp ISO-8601 em UTC.
- `pendencias.json.items[].id`: `PEND-YYYY-NNNN` (sequencial diário ou global).
- Determinismo: o mesmo artefato não deve gerar múltiplas entradas idênticas; reutilizar a chave do artefato como índice lógico no `rastreamento`.


# [global.agent-folder.atomicity]
## Escrita atômica e segurança de I/O

- Escrever em arquivo temporário (`*.tmp`) e fazer `rename` atômico.
- Nunca truncar arquivos críticos sem backup imediato (`*.bak`).
- Operações: leitura → validação → escrita temporária → `fsync` → `rename`.


# [global.agent-folder.mapping]
## Mapeamento de artefatos → rastreamento

- Java
  - Entidade: classe de domínio sem dependências de framework → `entidades.json[ClassName]` com `package`, `fields`, `status`.
  - Adaptador REST: controllers/spring → `adaptadores.json[ControllerName]` com `type=rest`, `route`, `package`.
  - Teste: classes `*Test`/JUnit → `testes.json[TestName]` com `type=unit|integration`, `status`, `coverage?`.
- Python
  - Entidade: modelos/domínio puros → `entidades.json` com `module`, `fields`.
  - Adaptador: views/routers (Django/Flask/FastAPI) → `adaptadores.json` com `type=rest`, `route`.
  - Teste: `tests/*` (pytest/unittest) → `testes.json`.
- Web
  - Componentes/UI e rotas mapeadas como adaptadores `type=rest` (se API) ou `type=cli`/`type=frontend` (quando aplicável e previsto pelo projeto).


# [global.agent-folder.auto-detect]
## Heurísticas de auto-detecção (criação inicial)

- Linguagem/stack:
  - Java: `pom.xml`/`build.gradle`, `src/main/java`.
  - Python: `pyproject.toml`/`requirements.txt`, `src/` ou raiz de pacote.
  - Web: `package.json`, frameworks detectados por dependências.
- Arquitetura: presença de pastas `domain`, `application`, `adapter` (hexagonal); `controller`/`service`/`repository` (MVC).
- Infra: `Dockerfile`, `.github/workflows/*`, `.gitlab-ci.yml`.
- API: anotações/routers e arquivos OpenAPI.


# [global.agent-folder.blocking-policy]
## Política de bloqueio por severidade de pendência

- `high`: bloqueia geração/alteração de artefatos relacionados até resolução.
- `medium`: permite avanço controlado, mas exige confirmação antes de etapas de risco.
- `low`: não bloqueia, mas deve ser resolvida oportunamente.

Checklist
- [ ] Classificar severidade ao registrar pendência
- [ ] Comunicar bloqueio com ação sugerida
- [ ] Remover pendência ao resolver e registrar no `decisoes.log`

# [global.agent-folder.precheck]
## Pré-checagem obrigatória antes de qualquer resposta/ação

- Antes de responder ao usuário ou iniciar implementação, validar:
  - Existência da pasta `.agente/`.
  - Consistência mínima de `contexto.json` e `decisoes.log`.
  - Pendências em `pendencias.json` (bloquear se houver pendências críticas).

Checklist
- [ ] `.agente/` existe? Se não, preparar criação guiada
- [ ] `contexto.json` válido e coerente com o projeto
- [ ] Sem pendências bloqueantes


# [global.agent-folder.postchange-trigger]
## Gatilho após criação/alteração de artefatos

- Após implementar classe, método ou funcionalidade, acionar atualização de contexto:
  - Adicionar/atualizar entradas em `rastreamento/*` conforme tipo (entidade, adaptador, teste).
  - Registrar evento em `decisoes.log` (data, ação, artefato, evidência).
  - Ajustar `contexto.json` se novas tecnologias/decisões forem introduzidas.

Checklist
- [ ] Atualizar rastreamento do artefato criado/alterado
- [ ] Registrar ação no `decisoes.log`
- [ ] Revalidar consistência do `contexto.json`


# [global.agent-folder.sync-command]
## Comando "sincronizar contexto" — fluxo operacional

Objetivo: alinhar `.agente/` ao estado real do projeto quando solicitado pelo usuário.

- Se `.agente/` não existir:
  - Detectar stack/arquitetura/infra a partir do repositório.
  - Criar `.agente/` com `contexto.json/md`, `decisoes.log`, `pendencias.json`, `rastreamento/*`.
- Se `.agente/` existir:
  - Ler conteúdo atual e escanear o projeto (código, configs, pipelines).
  - Calcular diferenças e atualizar somente se houver consistência (sem sobrescrever decisões ativas sem justificativa).
  - Em caso de divergência relevante, registrar em `pendencias.json` e solicitar confirmação.

Checklist
- [ ] Pasta criada quando ausente com contexto mínimo
- [ ] Diferenças reconciliadas e registradas
- [ ] Divergências pendentes documentadas


# [global.agent-folder.examples]
## Exemplos de arquivos padronizados

### `.agente/contexto.json`
```json
{
  "language": "java",
  "framework": "spring-boot",
  "architecture": "hexagonal",
  "versions": {
    "java": "21"
  },
  "testing": {
    "unit": "junit5",
    "coverage_min": 80
  },
  "infrastructure": {
    "containers": true,
    "ci": "github-actions"
  },
  "api": {
    "style": "rest",
    "openapi": "3.1"
  },
  "updatedAt": "2025-09-14T10:00:00Z"
}
```

### `.agente/decisoes.log` (append-only)
```
[2025-09-14T10:01:12Z] infer: language=java (pom.xml)
[2025-09-14T10:02:05Z] adopt: architecture=hexagonal (user-confirmed)
[2025-09-14T10:05:30Z] create: domain entity Usuario (src/main/java/...)
[2025-09-14T10:06:00Z] update: contexto.json (java=21; openapi=3.1)
```

### `.agente/rastreamento/entidades.json`
```json
{
  "Usuario": {
    "package": "br.com.app.domain.usuario",
    "fields": ["id", "nome", "email"],
    "status": "complete"
  }
}
```

### `.agente/rastreamento/adaptadores.json`
```json
{
  "UsuarioController": {
    "type": "rest",
    "route": "/usuarios",
    "package": "br.com.app.adapter.controller",
    "status": "complete"
  }
}
```

### `.agente/rastreamento/testes.json`
```json
{
  "UsuarioServiceTest": {
    "type": "unit",
    "status": "implemented",
    "coverage": 92
  }
}
```


# [global.agent-folder.pendencias]
## `.agente/pendencias.json` — formato e exemplo

### Formato
```json
{
  "items": [
    {
      "id": "PEND-2025-0001",
      "title": "Definir SGBD padrão",
      "severity": "high", 
      "status": "open", 
      "createdAt": "2025-09-14T10:10:00Z",
      "context": {
        "area": "infra.database",
        "blockedActions": ["generate-repository", "run-migrations"]
      }
    }
  ]
}
```

### Exemplo
```json
{
  "items": [
    {
      "id": "PEND-2025-0002",
      "title": "Confirmar arquitetura: hexagonal",
      "severity": "medium",
      "status": "open",
      "createdAt": "2025-09-14T10:12:00Z",
      "context": {"area": "architecture"}
    }
  ]
}
```


# [global.agent-folder.schemas]
## Pseudo-JSON Schema para validação (referência)

### Schema: `contexto.json`
```json
{
  "type": "object",
  "required": ["language", "architecture", "updatedAt"],
  "properties": {
    "language": {"type": "string"},
    "framework": {"type": "string"},
    "architecture": {"type": "string", "enum": ["hexagonal", "mvc", "spa", "ssr", "microfrontends"]},
    "versions": {"type": "object"},
    "testing": {"type": "object"},
    "infrastructure": {"type": "object"},
    "api": {"type": "object"},
    "updatedAt": {"type": "string", "format": "date-time"}
  },
  "additionalProperties": true
}
```

### Schema: `rastreamento/entidades.json`
```json
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "required": ["package", "fields", "status"],
    "properties": {
      "package": {"type": "string"},
      "fields": {"type": "array", "items": {"type": "string"}},
      "status": {"type": "string", "enum": ["incomplete", "complete"]}
    }
  }
}
```

### Schema: `rastreamento/adaptadores.json`
```json
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "required": ["type", "package", "status"],
    "properties": {
      "type": {"type": "string", "enum": ["rest", "messaging", "persistence", "cli"]},
      "route": {"type": "string"},
      "package": {"type": "string"},
      "status": {"type": "string", "enum": ["incomplete", "complete"]}
    }
  }
}
```

### Schema: `rastreamento/testes.json`
```json
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "required": ["type", "status"],
    "properties": {
      "type": {"type": "string", "enum": ["unit", "integration", "e2e"]},
      "status": {"type": "string", "enum": ["planned", "implemented"]},
      "coverage": {"type": "number", "minimum": 0, "maximum": 100}
    }
  }
}
```

### Formato: `decisoes.log`
```
[ISO-8601] <action>: <key>=<value> (<evidence|note>)
action ∈ {infer, adopt, create, update, block}
```


# [global.anti-duplication]
## Regras e fluxo

- Verificar `contexto.json`, `rastreamento/` e o repositório antes de criar artefatos.
- Em caso de conflito: sugerir reaproveitar/estender; nunca duplicar sem justificativa.
- Política de abortamento: registrar bloqueios em `decisoes.log`.

Checklist
- [ ] Checagens concluídas antes de criar/alterar artefatos
- [ ] Conflitos comunicados e registrados
- [ ] Rastreamento atualizado em cada iteração


# [global.decision-versioning]
## Sistema de versionamento de decisões

- Manter `.agente/decisoes/contexto-atual.json` e histórico `historico/`.
- Aplicar decisões ativas automaticamente; perguntar apenas o que é novo.

Checklist
- [ ] Decisões ativas consultadas antes de agir
- [ ] Novas decisões registradas com justificativa e impacto
- [ ] Conflitos entre decisões identificados e resolvidos


# [global.comments-docs]
## Comentários e documentação (JavaDoc/Docstring/OpenAPI)

- Evitar comentários em linha; priorizar nomes claros e documentação estruturada.
- APIs REST: OpenAPI 3.x obrigatório (anotações/geração automática quando disponível).

Checklist
- [ ] Documentar interfaces públicas e contratos
- [ ] Gerar/atualizar OpenAPI quando houver API
- [ ] Usar JavaDoc/Docstring conforme linguagem



# [global.agent-folder.error-handling]
## Tratamento de erros e integridade

- Qualquer escrita deve ser acompanhada de validação pós-escrita (read-back e parse/JSON.parse quando aplicável).
- Em falha de escrita/rename, criar backup imediato (`*.bak`) e manter o artefato anterior intacto.
- Manter logs de erro com mensagem, contexto e ação recomendada; nunca incluir dados sensíveis.
- Recuperação transacional: se uma etapa falhar, reverter alterações parciais e registrar pendência.

Checklist
- [ ] Validar conteúdo após escrita (read-back)
- [ ] Backup automático antes de alterações críticas
- [ ] Pendência criada quando a recuperação não for possível


# [global.agent-folder.fs-compat]
## Compatibilidade de filesystem (Windows/POSIX)

- Rename atômico: preferir `rename`/`move` sobre `write-in-place`; em POSIX, considerar `fsync` do arquivo e do diretório pai.
- Windows pode bloquear arquivos abertos por outros processos; repetir com backoff exponencial antes de falhar.
- Normalização de novas linhas e encoding: usar UTF-8 com BOM ausente; padronizar `\n`.

Checklist
- [ ] `fsync` (ou equivalente) no arquivo e diretório quando disponível
- [ ] Backoff em locks do Windows
- [ ] Encoding e novas linhas padronizados


# [global.agent-folder.schema-versioning]
## Versionamento de schemas e metadados

- Incluir `$schema` (URL de referência) e `schemaVersion` nos arquivos JSON controlados.
- Alterações incompatíveis exigem incremento de `schemaVersion` e rotina de migração registrada em `decisoes.log`.

Exemplo mínimo
```json
{
  "$schema": "https://example.com/schemas/contexto.schema.json",
  "schemaVersion": 1,
  "language": "java",
  "architecture": "hexagonal",
  "updatedAt": "2025-09-14T10:00:00Z"
}
```

Checklist
- [ ] `$schema` e `schemaVersion` presentes
- [ ] Migração documentada para mudanças incompatíveis


# [global.decision-adr]
## Registros de Decisão de Arquitetura (ADR — MADR)

- Manter ADRs em `.agente/decisoes/adr/` seguindo formato MADR (Context, Decision, Status, Consequences, Alternatives).
- Relacionar ADR a entradas de `decisoes.log` via ID/slug.
- Status recomendado: `proposed` → `accepted`/`rejected` → `superseded`.

Checklist
- [ ] ADR criado para decisões arquiteturais relevantes
- [ ] Status e consequências claros
- [ ] Link com `decisoes.log`


# [global.agent-folder.sync-command.invoke]
## Forma de invocação do comando "sincronizar contexto"

- Disparo por comando de usuário (texto): "sincronizar contexto".
- Opcional CLI: `rg-agent sync` (quando tooling estiver disponível).
- Pré-condições: repositório acessível; leitura non-invasive; executar dry-run primeiro e reportar difs.
- Política: atualizar somente quando consistente; divergências viram pendências com severidade adequada.

Checklist
- [ ] Dry-run executado e difs reportados
- [ ] Atualização somente quando consistente
- [ ] Pendências criadas para divergências


# [global.agent-folder.security]
## Segurança e privacidade (LGPD)

- Anonimizar dados pessoais em `rastreamento/*`, `decisoes.log` e exemplos.
- Evitar armazenar segredos/credenciais; usar referências a cofres/variáveis de ambiente.
- Controlar acesso à pasta `.agente/` conforme política do repositório; revisar PRs.

Checklist
- [ ] Sem dados sensíveis em logs/artefatos
- [ ] Segredos fora do repositório
- [ ] Revisões ativas para `.agente/`


# [global.agent-folder.ids.determinism]
## Determinismo na geração de IDs

- Formato: `PEND-YYYY-NNNN` para pendências; sequência monotônica por dia.
- Persistir contador em `.agente/counters.json` para resistir a reinícios; fallback: calcular a partir de itens existentes.
- Evitar colisões: verificar existência antes de confirmar o ID; em colisão, incrementar com backoff.

Checklist
- [ ] Contador persistido em `counters.json`
- [ ] Verificação de colisão antes de confirmar
- [ ] Reuso de chaves lógicas quando aplicável

