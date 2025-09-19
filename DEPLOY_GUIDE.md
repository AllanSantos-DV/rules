# 🚀 Deploy no GitHub Pages

Este guia explica como publicar o Rules Generator no GitHub Pages.

## 📋 Pré-requisitos

- Conta no GitHub
- Repositório criado
- Git configurado localmente

## 🔧 Configuração Inicial

### 1. Criar Repositório no GitHub

1. **Acesse**: [GitHub](https://github.com)
2. **Clique**: "New repository"
3. **Nome**: `rules-generator` (ou seu preferido)
4. **Visibilidade**: Public (para GitHub Pages gratuito)
5. **Crie** o repositório

### 2. Configurar Repositório Local

```bash
# Inicializar Git (se não existir)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit: Rules Generator"

# Adicionar remote
git remote add origin https://github.com/AllanSantos-DV/rules.git

# Push inicial
git push -u origin main
```

### 3. Atualizar Configuração

**Edite `_config.yml`**:
```yaml
url: https://allansantos-dv.github.io
baseurl: /rules
```

**Substitua**:
- `AllanSantos-DV`: Seu username do GitHub
- `rules`: Nome do seu repositório

## ⚙️ Configuração do GitHub Pages

### Método 1: GitHub Actions (Recomendado)

1. **Acesse**: Seu repositório no GitHub
2. **Vá para**: Settings → Pages
3. **Source**: "GitHub Actions"
4. **Salve** as configurações

### Método 2: Deploy from Branch

1. **Acesse**: Settings → Pages
2. **Source**: "Deploy from a branch"
3. **Branch**: `main` ou `master`
4. **Folder**: `/ (root)`
5. **Salve** as configurações

## 🔄 Deploy Automático

### Workflow GitHub Actions

O arquivo `.github/workflows/deploy.yml` já está configurado para:

- **Build automático** com Jekyll
- **Deploy** para GitHub Pages
- **Trigger** em push para main/master

### Testando Localmente

```bash
# Instalar dependências
bundle install

# Servidor local
bundle exec jekyll serve

# Acessar
http://localhost:4000
```

## 🌐 Acessando o Site

Após o deploy, seu site estará disponível em:

```
https://allansantos-dv.github.io/rules
```

## 🔧 Troubleshooting

### Erro: "Page build failed"

**Possíveis causas**:
- Sintaxe YAML inválida em `_config.yml`
- Plugins não suportados
- Arquivos muito grandes

**Solução**:
```bash
# Testar localmente
bundle exec jekyll build

# Verificar logs
bundle exec jekyll serve --verbose
```

### Erro: "404 Not Found"

**Possíveis causas**:
- `baseurl` incorreto
- Arquivos não commitados
- Cache do GitHub

**Solução**:
1. Verificar `baseurl` em `_config.yml`
2. Fazer novo commit
3. Aguardar alguns minutos

### Erro: "Permission denied"

**Possíveis causas**:
- Repositório privado
- Permissões incorretas

**Solução**:
1. Tornar repositório público
2. Verificar permissões em Settings → Pages

## 📊 Monitoramento

### GitHub Actions

1. **Acesse**: Actions tab no repositório
2. **Monitore**: Status dos builds
3. **Logs**: Verificar erros em tempo real

### GitHub Pages

1. **Acesse**: Settings → Pages
2. **Status**: Verificar se está "Published"
3. **URL**: Confirmar link correto

## 🔄 Atualizações

### Deploy Manual

```bash
# Fazer alterações
git add .
git commit -m "Update: descrição das mudanças"
git push origin main
```

### Deploy Automático

- **Push** para branch `main` ou `master`
- **GitHub Actions** executa automaticamente
- **Site** atualiza em alguns minutos

## 🎯 Otimizações

### Performance

- **Minificar** CSS/JS
- **Otimizar** imagens
- **Usar** CDN para assets

### SEO

- **Meta tags** em `_config.yml`
- **Sitemap** automático
- **Robots.txt** personalizado

### Analytics

```yaml
# _config.yml
google_analytics: UA-XXXXXXXXX-X
```

## 📚 Recursos Adicionais

- **📄 [GitHub Pages Docs](https://docs.github.com/en/pages)**
- **📄 [Jekyll Docs](https://jekyllrb.com/docs/)**
- **📄 [GitHub Actions](https://docs.github.com/en/actions)**

## 🆘 Suporte

- **Issues**: [GitHub Issues](https://github.com/AllanSantos-DV/rules/issues)
- **Discussions**: [GitHub Discussions](https://github.com/AllanSantos-DV/rules/discussions)

---

**Deploy realizado com sucesso! 🎉**
