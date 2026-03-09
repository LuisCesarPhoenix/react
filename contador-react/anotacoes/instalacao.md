```text
contador-react/
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

## OBJETIVO FINAL:

Criar um projeto React + Vite que tenha:

- um contador
- usando useState
- mostrando o valor na tela
- botão Adicionar → chama a função adicionar
- botão Reduzir → chama a função reduzir

# INSTALAÇÃO

## 1. Pré-requisito (único)

Você precisa ter o Node.js instalado.

Verifique no terminal:

- node -v
- npm -v

Se não tiver instalado, instale através do site oficial:

- https://nodejs.org

## 2. Criando o projeto React + Vite

Abra o terminal do VS Code (ou terminal normal) e execute:

- npm create vite@latest contador-react

Quando o assistente perguntar, escolha exatamente:

✔ Select a framework: React
✔ Select a variant: TypeScript

Entre na pasta do projeto:

- cd contador-react

Instale as dependências:

- npm install

Abra o projeto no VS Code:

- code .

## 3. Rodando o projeto

No terminal:

- npm run dev

Abra no navegador:

- http://localhost:5173

Você verá:

- Título
- Valor do contador
- Botão Adicionar
- Botão Reduzir

8. Checklist final

O que eu fiz:

✔ Criei o projeto React + Vite
✔ Instalei as dependências
✔ Usei o useState
✔ Criei as funções Adicionar e Reduzir
✔ Atualizei o estado
✔ Entendi renderização e re-renderização

9. Observação importante (conceito-chave)

Sempre que você clica em um botão:

- setValor é chamado
- O estado muda
- React executa a função App() novamente
- A tela é atualizada

👉 Isso é renderização em React.