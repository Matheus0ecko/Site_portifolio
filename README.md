# Portfólio — Matheus Matos

Site de portfólio pessoal (Analista de Dados / Ciência de Dados), construído com **Vite + React + Tailwind CSS** e publicado como **site estático no Azure Blob Storage**, com deploy automático via **GitHub Actions**.

A seção "Direto do GitHub" busca seus repositórios em tempo real pela API pública do GitHub.

---

## Rodar localmente

Pré-requisito: [Node.js 18+](https://nodejs.org).

```bash
npm install     # instala as dependências
npm run dev     # abre em http://localhost:5173
npm run build   # gera a pasta dist/ (versão de produção)
npm run preview # testa a build de produção localmente
```

## Editar o conteúdo

Quase tudo (nome, bio, links, skills e projetos em destaque) está em um único arquivo:

```
src/data/profile.js
```

Abra, troque os textos e os links dos 3 projetos pelos seus repositórios reais e salve. Um `git push` publica a atualização.

---

## Publicar no Azure Blob Storage (site estático)

> Você faz isto **uma vez**. Depois, todo `push` na branch `main` publica sozinho.

### 1. Suba o projeto para o GitHub

```bash
git init
git add .
git commit -m "portfólio inicial"
git branch -M main
git remote add origin https://github.com/Matheus0ecko/SEU-REPO.git
git push -u origin main
```

### 2. Crie um Storage Account no Azure

1. No [portal do Azure](https://portal.azure.com), busque **Storage accounts** → **Criar**.
2. Escolha sua assinatura (Azure for Students), crie/selecione um Resource group.
3. Dê um nome (só letras minúsculas e números, ex: `matheusportfolio`).
4. Redundância: **LRS** (mais barata). Crie o recurso.

### 3. Ative o site estático

1. Dentro do Storage Account, no menu lateral abra **Static website**.
2. Marque **Enabled**.
3. Em **Index document name** digite: `index.html`
4. Em **Error document path** digite: `index.html`  ← (importante para as rotas do site funcionarem)
5. **Salve**. Copie a **Primary endpoint** que aparece — essa é a **URL pública do seu site**.

O Azure cria automaticamente um container especial chamado `$web`, que é onde os arquivos ficam hospedados.

### 4. Pegue a connection string

1. No Storage Account, abra **Access keys** (Chaves de acesso).
2. Em `key1`, clique em **Show** ao lado de **Connection string** e copie o valor.

### 5. Cadastre os segredos no GitHub

No repositório do GitHub: **Settings → Secrets and variables → Actions**.

- Aba **Secrets** → **New repository secret**:
  - Nome: `AZURE_STORAGE_CONNECTION_STRING`
  - Valor: a connection string copiada no passo 4.
- Aba **Variables** → **New repository variable**:
  - Nome: `AZURE_STORAGE_ACCOUNT`
  - Valor: o nome do Storage Account (ex: `matheusportfolio`).

### 6. Publique

Faça qualquer `push` na `main` (ou rode o workflow manualmente na aba **Actions → Deploy para Azure Blob Storage → Run workflow**).

O GitHub Actions vai:
1. instalar as dependências e rodar `npm run build`;
2. enviar o conteúdo de `dist/` para o container `$web`.

Abra a **Primary endpoint** (passo 3) e o site estará no ar. 🎉

---

## Estrutura do projeto

```
portfolio-matheus/
├─ .github/workflows/deploy.yml   # CI/CD para o Azure
├─ public/favicon.svg
├─ src/
│  ├─ components/                 # Nav, Hero, About, Skills, Projects, GitHubRepos, Contact, Footer
│  ├─ data/profile.js             # <- edite seus dados aqui
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ useReveal.js
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## Dica para os projetos de Power BI

Como o `.pbix` não roda no navegador, as melhores formas de mostrar seus dashboards são:
- **Publicar para a web** no Power BI Service e colocar o link em `demo` (em `profile.js`);
- ou gravar um **GIF/vídeo curto** e/ou colocar **prints** no README do repositório do projeto.

O link do repositório já aparece no card e na seção "Direto do GitHub".
