# 🚀 Guia de Expansão - Rules Generator

Este guia explica como adicionar novos domínios, linguagens, frameworks e opções ao sistema Rules Generator.

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura do Sistema](#-estrutura-do-sistema)
- [Adicionando Novo Domínio](#-adicionando-novo-domínio)
- [Adicionando Nova Linguagem](#-adicionando-nova-linguagem)
- [Adicionando Novo Framework](#-adicionando-novo-framework)
- [Adicionando Nova Arquitetura](#-adicionando-nova-arquitetura)
- [Adicionando Nova Versão](#-adicionando-nova-versão)
- [Atualizando o Frontend](#-atualizando-o-frontend)
- [Convenções e Padrões](#-convenções-e-padrões)
- [Testando Expansões](#-testando-expansões)

## 🎯 Visão Geral

O sistema Rules Generator é modular e extensível. Cada nova opção requer:

1. **Arquivo de Documentação**: Markdown com âncoras canônicas
2. **Mapeamento no Gerador**: JavaScript para incluir o arquivo
3. **Interface do Usuário**: Cards e seleções no frontend
4. **Validação**: Testes para garantir funcionamento

## 🏗️ Estrutura do Sistema

### Arquivos Principais

```
rules/
├── 📁 doc/                    # Documentação modular
│   ├── 📁 global/            # Regras universais
│   ├── 📁 backend/           # Backend (Java, Python)
│   ├── 📁 web/               # Frontend
│   ├── 📁 desktop/           # Desktop
│   └── 📁 template/          # Template final
├── 📁 assets/js/             # JavaScript do sistema
│   ├── 📄 selector.js        # UI e seleções
│   └── 📄 generator.js       # Geração de documentos
└── 📄 index.html             # Interface principal
```

### Fluxo de Funcionamento

1. **Usuário seleciona** opções na UI (`selector.js`)
2. **Sistema mapeia** seleção para arquivos (`generator.js`)
3. **Arquivos são carregados** e concatenados
4. **Documento final** é gerado com âncoras e índice

## 🌍 Adicionando Novo Domínio

### Exemplo: Domínio "Mobile"

#### 1. Criar Estrutura de Pastas

```bash
mkdir -p doc/mobile/android
mkdir -p doc/mobile/ios
mkdir -p doc/mobile/flutter
```

#### 2. Criar Arquivos de Documentação

**`doc/mobile/android/framework-android-native.md`**:
```markdown
---
title: Android Native Development
description: Desenvolvimento nativo Android com Kotlin/Java
version: 1.0
---

# <!-- desc: Desenvolvimento nativo Android com Kotlin/Java -->
# [mobile.android.framework.native]
## Diretrizes

- Usar Kotlin como linguagem principal
- Seguir Material Design Guidelines
- Implementar arquitetura MVVM com ViewModel

# [mobile.android.framework.native.ui]
## Interface do Usuário

- Compose UI para interfaces modernas
- XML Layout para compatibilidade
- Responsive design para diferentes telas

# [mobile.android.framework.native.performance]
## Performance

- Otimização de memória
- Lazy loading de imagens
- Background tasks com WorkManager
```

#### 3. Atualizar o Gerador

**`assets/js/generator.js`** - Função `mapSelectionToFiles`:
```javascript
function mapSelectionToFiles(sel){
  const files = ['doc/global/agent-folder.md', 'doc/global/process-analysis.md'];
  
  // ... código existente ...
  
  } else if(sel.domain==='mobile'){
    if(sel.language==='android'){
      if(sel.framework==='native') files.push('doc/mobile/android/framework-android-native.md');
      if(sel.framework==='flutter') files.push('doc/mobile/android/framework-flutter.md');
    }
    if(sel.language==='ios'){
      if(sel.framework==='swiftui') files.push('doc/mobile/ios/framework-swiftui.md');
      if(sel.framework==='uikit') files.push('doc/mobile/ios/framework-uikit.md');
    }
  }
  
  return files;
}
```

#### 4. Atualizar a Interface

**`assets/js/selector.js`** - Objeto `maps`:
```javascript
const maps = {
  domains: [
    { id: 'backend', name: 'Backend', icon: 'bi-server', desc: 'APIs, serviços e regras de negócio' },
    { id: 'web', name: 'Web', icon: 'bi-globe', desc: 'Front-end e experiência do usuário' },
    { id: 'desktop', name: 'Desktop', icon: 'bi-laptop', desc: 'Aplicações desktop multiplataforma' },
    { id: 'mobile', name: 'Mobile', icon: 'bi-phone', desc: 'Aplicações móveis Android e iOS' }
  ],
  
  // ... resto do código ...
  
  mobile: {
    language: [
      { id: 'android', name: 'Android', icon: 'bi-android' },
      { id: 'ios', name: 'iOS', icon: 'bi-apple' },
      { id: 'flutter', name: 'Flutter', icon: 'bi-phone' }
    ],
    framework: {
      android: [
        { id: 'native', name: 'Android Native', icon: 'bi-android' },
        { id: 'flutter', name: 'Flutter', icon: 'bi-phone' }
      ],
      ios: [
        { id: 'swiftui', name: 'SwiftUI', icon: 'bi-apple' },
        { id: 'uikit', name: 'UIKit', icon: 'bi-apple' }
      ]
    }
  }
};
```

## 🔤 Adicionando Nova Linguagem

### Exemplo: Go no Backend

#### 1. Criar Estrutura

```bash
mkdir -p doc/backend/go
```

#### 2. Criar Arquivos

**`doc/backend/go/framework-gin.md`**:
```markdown
---
title: Gin Framework
description: Framework web Go para APIs REST
version: 1.0
---

# <!-- desc: Framework web Go para APIs REST -->
# [backend.go.framework.gin]
## Diretrizes

- Usar Gin para APIs REST
- Middleware para autenticação
- Validação de dados com struct tags

# [backend.go.framework.gin.routing]
## Roteamento

- Grupos de rotas por funcionalidade
- Middleware específico por grupo
- Versionamento de API
```

#### 3. Atualizar Mapeamento

```javascript
} else if(sel.domain==='backend' && sel.language==='go'){
  if(sel.framework==='gin') files.push('doc/backend/go/framework-gin.md');
  if(sel.framework==='echo') files.push('doc/backend/go/framework-echo.md');
  if(sel.architecture==='hexagonal') files.push('doc/backend/go/arch-hexagonal.md');
  if(sel.version?.go) files.push(`doc/backend/go/version-${sel.version.go}.md`);
}
```

## 🏗️ Adicionando Novo Framework

### Exemplo: Next.js no Web

#### 1. Criar Arquivo

**`doc/web/stack-nextjs.md`**:
```markdown
---
title: Next.js Stack
description: Framework React com SSR e SSG
version: 1.0
---

# <!-- desc: Framework React com SSR e SSG -->
# [web.stack.nextjs]
## Diretrizes

- Usar App Router (Next.js 13+)
- Server Components quando possível
- Client Components para interatividade

# [web.stack.nextjs.ssr]
## Server-Side Rendering

- getServerSideProps para dados dinâmicos
- getStaticProps para dados estáticos
- ISR para atualizações incrementais
```

#### 2. Atualizar Interface

```javascript
web: {
  stack: [
    { id: 'base', name: 'HTML/CSS/JS', icon: 'bi-code-slash' },
    { id: 'react', name: 'React', icon: 'bi-react' },
    { id: 'angular', name: 'Angular', icon: 'bi-angular' },
    { id: 'vue', name: 'Vue', icon: 'bi-vue' },
    { id: 'nextjs', name: 'Next.js', icon: 'bi-react' }
  ]
}
```

## 🏛️ Adicionando Nova Arquitetura

### Exemplo: Clean Architecture

#### 1. Criar Arquivo

**`doc/backend/java/arch-clean.md`**:
```markdown
---
title: Clean Architecture
description: Arquitetura limpa com separação de responsabilidades
version: 1.0
---

# <!-- desc: Arquitetura limpa com separação de responsabilidades -->
# [backend.java.arch.clean]
## Diretrizes

- Entities no centro (regras de negócio)
- Use Cases como camada de aplicação
- Interface Adapters para I/O
- Frameworks externos na borda

# [backend.java.arch.clean.layers]
## Camadas

- **Entities**: Regras de negócio fundamentais
- **Use Cases**: Regras de aplicação específicas
- **Interface Adapters**: Conversores de dados
- **Frameworks**: Detalhes de implementação
```

#### 2. Atualizar Mapeamento

```javascript
if(sel.architecture==='clean') files.push('doc/backend/java/arch-clean.md');
```

## 🔢 Adicionando Nova Versão

### Exemplo: Java 23

#### 1. Criar Arquivo

**`doc/backend/java/version-23.md`**:
```markdown
---
title: Java 23
description: Última versão LTS com novos recursos
version: 1.0
---

# <!-- desc: Última versão LTS com novos recursos -->
# [backend.java.version.23]
## Novos Recursos

- Virtual Threads melhorados
- Pattern Matching avançado
- String Templates
- Sequenced Collections

# [backend.java.version.23.performance]
## Melhorias de Performance

- Garbage Collector otimizado
- Compilação AOT experimental
- Melhor suporte a containers
```

#### 2. Atualizar Interface

```javascript
version: {
  java: [
    { id: '11', name: '11', icon: 'J' },
    { id: '17', name: '17', icon: 'J' },
    { id: '21', name: '21', icon: 'J' },
    { id: '23', name: '23', icon: 'J' }
  ]
}
```

## 🎨 Atualizando o Frontend

### Adicionando Novo Card de Domínio

**`index.html`**:
```html
<div class="col-md-4 mb-3">
  <div class="card h-100 domain-card" data-domain="mobile">
    <div class="card-body text-center">
      <i class="bi bi-phone fs-1 mb-3 text-primary"></i>
      <h5 class="card-title">Mobile</h5>
      <p class="card-text">Aplicações móveis Android e iOS</p>
    </div>
  </div>
</div>
```

### Atualizando CSS

**`assets/css/main.css`**:
```css
.domain-card[data-domain="mobile"]:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
}
```

## 📏 Convenções e Padrões

### Estrutura de Arquivos

```
doc/{domain}/{language}/type-{name}.md
```

**Exemplos**:
- `doc/backend/java/framework-spring-boot-3x.md`
- `doc/web/css-framework-tailwind.md`
- `doc/desktop/python/arch-mvvm.md`

### Âncoras Canônicas

**Formato**: `# [domain.language.type.name.subtopic]`

**Exemplos**:
- `# [backend.java.framework.spring-boot.3x.security]`
- `# [web.stack.nextjs.ssr.performance]`
- `# [desktop.python.arch.mvvm.viewmodel]`

### Front Matter Obrigatório

```yaml
---
title: Nome do Módulo
description: Descrição breve para UI
version: 1.0
---
```

### Descrição para UI

```markdown
# <!-- desc: Descrição que aparece no card da interface -->
```

## 🧪 Testando Expansões

### Checklist de Validação

- [ ] **Arquivo criado** com âncoras canônicas
- [ ] **Mapeamento atualizado** no `generator.js`
- [ ] **Interface atualizada** no `selector.js`
- [ ] **Card adicionado** no `index.html`
- [ ] **Geração testada** com nova seleção
- [ ] **Documento final** válido e completo
- [ ] **Âncoras presentes** no índice dinâmico

### Teste Manual

1. **Inicie o servidor**: `python -m http.server 8000`
2. **Acesse**: `http://localhost:8000`
3. **Selecione** a nova opção
4. **Gere documento** e verifique:
   - Front matter correto
   - Âncoras presentes
   - Conteúdo incluído
   - JSON summary válido

### Teste Automatizado (Futuro)

```javascript
// Exemplo de teste unitário
describe('Mobile Domain', () => {
  test('should include mobile files when selected', () => {
    const selection = { domain: 'mobile', language: 'android' };
    const files = mapSelectionToFiles(selection);
    expect(files).toContain('doc/mobile/android/framework-android-native.md');
  });
});
```

## 🚨 Problemas Comuns

### Âncoras Duplicadas

**Problema**: `Error: Duplicate anchor ids detected`

**Solução**: Verificar se âncora já existe em outro arquivo

### Arquivo Não Encontrado

**Problema**: `Falha ao carregar: doc/mobile/android/framework-android-native.md`

**Solução**: Verificar se arquivo existe e caminho está correto

### Placeholder Não Resolvido

**Problema**: `{{mobile|android}}` aparece no documento final

**Solução**: Adicionar substituição no `fillScope()`

## 📚 Recursos Adicionais

- **📄 [doc/README.md](doc/README.md)**: Convenções técnicas detalhadas
- **📄 [README.md](README.md)**: Visão geral do projeto
- **🔍 [Exemplos](doc/)**: Arquivos existentes como referência

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie** branch para sua expansão
3. **Siga** as convenções deste guia
4. **Teste** completamente
5. **Abra** Pull Request com descrição detalhada

---

**Este guia está em constante evolução. Contribua com melhorias!**
