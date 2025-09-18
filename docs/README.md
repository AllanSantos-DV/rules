---
title: Docs Modules
specVersion: 1.0
description: Conventions for building the final guide from modular blocks
---

# [docs.conventions]
## Conventions for anchors, metadata and composition

- Anchors: use a canonical slug on the first line of each section as `# [namespace.topic]`.
- Front matter: include YAML with `id`, `title`, `scope` and `type` to aid machine parsing.
- Deduplication: include only ONE global file: `doc/global/agent-folder.md` (id: `global`). All specific blocks must reference its anchors.
- Indexing: the final generator should extract anchors and list them in an `index.anchors[]` array.

## Final assembly order (single MD)

1. Include `doc/global/agent-folder.md` (id: `global`)
2. Include selected domain/language/framework/architecture/version blocks
3. All references to `# [global.*]` are internal anchors within the same final document

## Final index population (front matter)

- Use `doc/template/FINAL_TEMPLATE.md` as the base.
- After concatenation, scan all lines starting with `# [` and collect the slugs as:
  - `index.anchors[].id` = text inside brackets (e.g., `global.agent-folder`)
  - `index.anchors[].path` = the exact heading line (e.g., `# [global.agent-folder]`)
- Keep order as encountered (GLOBAL first, then specifics).

## Validation rules (generator MUST)

- Read `mustIncludeAnchors` from the final document front matter (see `doc/template/FINAL_TEMPLATE.md`).
- After building `index.anchors`, verify that every `mustIncludeAnchors[]` id exists in `index.anchors[].id`.
- If any required anchor is missing, abort generation and return an error listing the missing ids.
- Fail if duplicate anchor ids are detected.
- Validate that the first anchors belong to the `global` section before any specific blocks.

Checklist
- [ ] Each file has a unique `id` and anchor slug
- [ ] Include only `doc/global/agent-folder.md` as the global section
- [ ] No global guidance duplicated in language/framework blocks
- [ ] Cross-reference global slugs instead of copying content
- [ ] Keep checklists short and action-oriented


