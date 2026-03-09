```text
ecoapiv2-datapoints-react/
├─ anotacoes/
|  ├─ instalacao.md
|  └─ mudar_versoes_do_node.md
├─ node-modules/
├─ public/
|  └─ vite.svg
├─ src/
|  └─ assets
|     └─ react.svg
│  ├─ App.css
|  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ .gitignore
├─ eslint.config.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

# INSTALAÇÃO

## 1. Pré-requisitos (obrigatórios)

Você precisa ter apenas isto instalado:

✅ Node.js (18 ou superior)

Verifique no terminal:

- node -v
- npm -v

Se não tiver instalado, instale pelo site oficial: 

- https://nodejs.org

## 2. Criando o projeto React + Vite

No terminal (pode ser o do VS Code):

- npm create vite@latest ecoapiv2-datapoints-react

Escolha exatamente:

✔ Select a framework: React
✔ Select a variant: TypeScript

Depois entre no projeto:

- cd ecoapiv2-datapoints-react

Instale as dependências:

- npm install

Abra no VS Code:

- code .

## 3. Entendendo a API (conceito)

Pela documentação:

- https://ecoapi.ecoweb.eco.br/v2/docs/#/

O endpoint de DataPoints segue o padrão REST:

- GET https://ecoapi.ecoweb.eco.br/v2/datapoints

Esse endpoint retorna JSON.

⚠️ Importante:
- Se a API exigir token, o fetch precisará de Authorization.

## 4. Rodando o projeto

No terminal:

- npm run dev

Abra no navegador:

- http://localhost:5173

Você verá:

- Título: DataPoints (JSON)
- O JSON retornado da API renderizado na tela

## 5. Resumo final (checklist)

O que eu fiz:

✔ Criei o projeto React + Vite
✔ Instalei as dependências
✔ Usei useState
✔ Usei useEffect
✔ Consumi API externa
✔ Renderizei JSON na tela