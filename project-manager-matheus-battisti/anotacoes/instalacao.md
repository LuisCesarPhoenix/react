## Para saber se o node e o npm estao instalados:

PS C:\Users\cesar\documents\documentos b\react\project-manager> node -v
v20.19.0
PS C:\Users\cesar\documents\documentos b\react\project-manager> npm -v
10.8.2

### Se não tiver instalado, instale através do site oficial:

- https://nodejs.org

## Para ver as versoes do node disponiveis:

C:\Users\cesar\documents\documentos b\react\project-manager> nvm list

    22.12.0
    20.19.0
  * 18.20.8 (Currently using 64-bit executable)
    16.20.2

1. Usar Node 20.19.0 ou 22.12.0 (para Vite / React)

- nvm use 22.12.0

2. Ver a versão do Node.js

- node -v
v22.12.0

## 2. Criando o projeto React + Vite

Abra o terminal do VS Code (ou terminal normal) e execute:

- npm create vite@latest project-manager-matheus-battisti

Quando o assistente perguntar, escolha exatamente:

✔ Select a framework: React
✔ Select a variant: TypeScript

Entre na pasta do projeto:

- cd project-manager-matheus-battisti

Instale as dependências:

- npm install

Abra o projeto no VS Code:

- code .

## 3. Rodando o projeto

No terminal:

- npm run dev

Abra no navegador:

- http://localhost:5173