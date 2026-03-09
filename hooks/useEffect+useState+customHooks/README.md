# Este é um projeto React + TypeScript usando Vite, sem backend e sem bibliotecas externas além do React.

## 1. ÚNICO requisito de ambiente

✅ Node.js

- Você precisa ter o Node.js instalado.

- Versão recomendada: Node 18 ou superior

Verificação:

- node -v

- npm -v

- Sem isso, o projeto não roda.

## 2. Dependências necessárias do projeto

📦 React

O código usa useState, então precisa de:

- npm install react react-dom

📦 TypeScript

Porque os arquivos são .tsx:

- npm install -D typescript

- npm install -D @types/react @types/react-dom

📦 Vite

Pela presença de:

- vite.config.ts

- main.tsx

- vite-env.d.ts

Você precisa do Vite:

- npm install -D vite

## 3. O que NÃO é necessário

Pelo código mostrado:

❌ Nenhum backend
❌ Nenhuma API
❌ Nenhuma biblioteca externa
❌ Nenhum banco de dados
❌ Nenhum hook além do useState

- Este código é 100% front-end, local.

## 4. Como rodar o projeto (passo a passo)

Dentro da pasta do projeto:

- npm install
- npm run dev

Depois, abra no navegador:

- http://localhost:5173

## 5. O que esse código faz (conceitualmente)

const [valorAtual, setValorAtual] = useState(100)

- O componente renderiza

- O estado inicial é 100

Ao clicar nos botões:

- setValorAtual é chamado

- O estado muda

- O componente re-renderiza

- O novo valor aparece na tela

Isso é o exemplo mais puro de renderização e re-renderização em React.

## 6. Checklist final

Você precisa apenas de:

✔ Node.js
✔ React
✔ React DOM
✔ TypeScript
✔ Vite