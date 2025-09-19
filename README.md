# 📚 Rules Generator

Sistema de geração de documentação modular para desenvolvimento de software, otimizado para consumo por agentes de IA.

## 🎯 Visão Geral

O Rules Generator é uma ferramenta web que permite criar documentos de regras de desenvolvimento personalizados baseados na seleção do usuário. O sistema combina blocos modulares de documentação para gerar um guia final otimizado para agentes de IA.

### ✨ Características Principais

- **🎨 Interface Moderna**: UI responsiva com cards interativos e stepper
- **📦 Sistema Modular**: Documentação organizada em blocos reutilizáveis
- **🤖 Otimizado para IA**: Estrutura com âncoras canônicas e índice navegável
- **🔄 Cache-Busting**: Sistema anti-cache para desenvolvimento
- **📱 Responsivo**: Funciona perfeitamente em desktop e mobile

## 🚀 Deploy

### GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

1. **Clone** o repositório
2. **Configure** `_config.yml` com sua URL
3. **Push** para branch `main`
4. **GitHub Actions** faz o deploy automaticamente

**📄 [Guia Completo de Deploy](DEPLOY_GUIDE.md)**

**🌐 [Site Online](https://allansantos-dv.github.io/rules)**

### Deploy Local

```bash
# Instalar dependências
bundle install

# Servidor local
bundle exec jekyll serve

# Acessar
http://localhost:4000
```

### Fluxo de Uso

1. **Selecione o Domínio**: Backend, Web ou Desktop
2. **Configure as Opções**: Linguagem, Framework, Arquitetura, Versão
3. **Visualize o Preview**: Documento final gerado
4. **Baixe o Arquivo**: Markdown otimizado para IA

## 📁 Estrutura do Projeto

```
rules/
├── 📄 index.html              # Página principal do seletor
├── 📄 preview.html            # Página de preview do documento
├── 📁 assets/                 # Recursos estáticos
│   ├── 📁 css/               # Estilos customizados
│   └── 📁 js/                # JavaScript do sistema
├── 📁 doc/                   # Sistema modular de documentação
│   ├── 📁 global/            # Regras globais (sempre incluídas)
│   ├── 📁 backend/           # Backend (Java, Python)
│   ├── 📁 web/               # Frontend (React, Angular, Vue)
│   ├── 📁 desktop/           # Desktop (PySide6, Tkinter, Kivy)
│   └── 📁 template/          # Template para geração final
└── 📁 _layouts/              # Layouts Jekyll (opcional)
```

## 🎛️ Domínios Suportados

### 🔧 Backend
- **Java**: Spring Boot, Quarkus, Micronaut (versões 11, 17, 21)
- **Python**: Django, Flask, FastAPI (versões 3.8, 3.10, 3.12)
- **Arquiteturas**: MVC, Hexagonal

### 🌐 Web
- **Stacks**: HTML/CSS/JS, React, Angular, Vue
- **Arquiteturas**: SPA, SSR, Microfrontends
- **CSS**: Tailwind, Bootstrap, Material UI

### 🖥️ Desktop
- **Python**: PySide6, Tkinter, Kivy (versão 3.13)
- **Arquiteturas**: MVC, MVVM
- **Distribuição**: Windows

## 📋 Documento Final

O documento gerado inclui:

- **📋 Front Matter**: Metadados estruturados (scope, âncoras, validação)
- **🌍 Blocos Globais**: Regras universais (pasta .agente, processo de análise)
- **🎯 Blocos Específicos**: Diretrizes baseadas na seleção
- **📑 Índice Dinâmico**: Navegação por âncoras canônicas
- **🔍 JSON Summary**: Resumo estruturado para IA

### Exemplo de Uso por Agente IA

```markdown
# [global.process-analysis]
## Processo de Análise (5 Etapas)
1. Análise do Problema
2. Investigação Técnica
3. Formulação de Hipóteses
4. Planejamento da Solução
5. Implementação e Validação
```

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5 + Material Symbols
- **Build**: Servidor HTTP simples (Python)
- **Deploy**: GitHub Pages (compatível)

## 🔧 Desenvolvimento

### Estrutura Modular

Cada arquivo de documentação segue o padrão:

```markdown
---
title: Nome do Módulo
description: Descrição breve
version: 1.0
---

# [namespace.topic]
## Título da Seção

Conteúdo da seção...

# <!-- desc: Descrição para UI -->
```

### Âncoras Canônicas

- **Formato**: `# [namespace.topic.subtopic]`
- **Exemplo**: `# [backend.java.framework.spring-boot.3x]`
- **Navegação**: Direta via índice dinâmico

## 📖 Documentação Técnica

Para desenvolvedores que querem expandir o sistema:

- **📄 [Guia de Expansão](EXPANSION_GUIDE.md)**: Como adicionar novos domínios
- **📄 [doc/README.md](doc/README.md)**: Convenções técnicas detalhadas

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Siga** as convenções de âncoras canônicas
4. **Teste** a geração de documentos
5. **Abra** um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

- **Issues**: [GitHub Issues](https://github.com/AllanSantos-DV/rules/issues)
- **Documentação**: [Wiki do Projeto](https://github.com/AllanSantos-DV/rules/wiki)
- **Discussões**: [GitHub Discussions](https://github.com/AllanSantos-DV/rules/discussions)
- **Autor**: [AllanSantos-DV](https://github.com/AllanSantos-DV)

---

**Desenvolvido com ❤️ para a comunidade de desenvolvedores**
