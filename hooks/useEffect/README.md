# Este é um projeto React com TypeScript usando Vite, Tailwind CSS e algumas bibliotecas auxiliares. Abaixo está listado o que precisa estar instalado para esse projeto rodar, separados por nível.

## 1. Requisitos obrigatórios (ambiente)

✅ Node.js

Você precisa ter o Node.js instalado.

Versão recomendada: Node 18+

Confirmação:

node -v
npm -v

Sem isso, nada do projeto roda.

## 2. Dependências principais do projeto

Pelo código e estrutura (main.tsx, vite-env.d.ts, tailwind.config.js), este projeto usa:

📦 React + React DOM
- npm install react react-dom

📦 Vite (bundler)

Normalmente já vem no projeto, mas se não existir:

- npm install -D vite

E no package.json devem existir scripts como:

- "dev": "vite"

📦 TypeScript

Porque o arquivo é .tsx e há tipagem (ChangeEvent<HTMLInputElement>):

- npm install -D typescript

E também:

- npm install -D @types/react @types/react-dom

## 3. Bibliotecas visíveis no código

📦 dayjs

Você está usando:

- dayjs.extend(relativeTime)

- dayjs.locale('pt-br')

Logo, precisa instalar:

- npm install dayjs

E também importar corretamente no código (se ainda não estiver):

- import dayjs from 'dayjs'
- import relativeTime from 'dayjs/plugin/relativeTime'
- import 'dayjs/locale/pt-br'

## 4. Tailwind CSS (pela estrutura do projeto)

Como existe tailwind.config.js e index.css, você precisa ter:

- npm install -D tailwindcss postcss autoprefixer

E o Tailwind inicializado (normalmente já feito):

- npx tailwindcss init -p

## 5. Backend necessário (MUITO IMPORTANTE)

Este trecho:

- fetch('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')

⚠️ Isso exige um backend rodando.

1. Você precisa:

- Um servidor ativo em http://localhost:3333

2. Um endpoint:

- GET /events/:id/attendees

3. Se esse backend não estiver rodando, o front até sobe, mas:

- o fetch falha

- o useEffect gera erro no console

- attendees nunca é preenchido

## 6. Como rodar o projeto (ordem correta)

Dentro da pasta do projeto:

- npm install
- npm run dev

Depois acesse:

http://localhost:5173

## 7. Resumo direto (checklist)

Você precisa ter:

✔ Node.js
✔ React
✔ React DOM
✔ Vite
✔ TypeScript
✔ dayjs
✔ Tailwind CSS
✔ Backend rodando em localhost:3333

Observação técnica importante (meu código)

Você ainda não está usando o resultado do fetch:

.then(data => {})

O correto seria algo como:

.then(data => {
  setAttendees(data.attendees)
})

Caso contrário:

- o componente renderiza

- o useEffect roda

- mas a lista nunca aparece