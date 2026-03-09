Unsupported engine
Vite requires Node.js version 20.19+ or 22.12+

PS C:\Users\cesar\documents\documentos b> nvm -v
1.2.2
PS C:\Users\cesar\documents\documentos b> nvm version
1.2.2

## Instalando as versões exigidas pelo Vite

1. Instalar Node 20.19.0

- nvm install 20.19.0

2. Instalar Node 22.12.0 (opcional, mas recomendado)

- nvm install 22.12.0

## Alternar entre versões (parte MAIS IMPORTANTE)

1. Usar Node 20.19.0 (para Vite / React)

- nvm use 20.19.0

2. Ver a versão do Node.js

- node -v
v20.19.0

3. Voltar para Node 18 (Quando for trabalhar com Strapi)

- nvm use 18.20.8

4. Agora rodar o projeto React + Vite

Com Node 20.19 ativo, vá para a pasta do projeto:

- cd contador-react

Instale novamente (importante!):

- npm install

Depois:

- npm run dev

OBS: Nunca misturar no mesmo terminal sem trocar a versão do Node.js (nvm use)

## Dicas sobre as versões do Node.js

Frontend moderno (Vite, Next, React)
→ Node 20 ou 22

Backend legado / Strapi antigo
→ Node 16 ou 18

## Arquivo .nvmrc

Dentro de cada projeto, você pode criar um arquivo:

- .nvmrc

Exemplo para este projeto React:

- 20.19.0

Assim, no futuro, basta rodar:

- nvm use

E o NVM já sabe qual versão usar.

## Comando para eu ver todas as versões do node instaladas através do NVM

C:\Users\cesar\documents\documentos b> nvm list

    22.12.0
    20.19.0
  * 18.20.8 (Currently using 64-bit executable)
    16.20.2

C:\Users\cesar\documents\documentos b> nvm ls

    22.12.0
    20.19.0
  * 18.20.8 (Currently using 64-bit executable)
    16.20.2