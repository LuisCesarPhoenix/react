Unsupported engine
Vite requires Node.js version 20.19+ or 22.12+

PS C:\Users\cesar\documents\documentos b> nvm -v
1.2.2
PS C:\Users\cesar\documents\documentos b> nvm version
1.2.2

Instalando as versões exigidas pelo Vite

Instalar Node 20.19.0
nvm install 20.19.0

Instalar Node 22.12.0 (opcional, mas recomendado)
nvm install 22.12.0

6. Alternar entre versões (parte MAIS IMPORTANTE)

Usar Node 20.19.0 (para Vite / React)
nvm use 20.19.0

node -v
v20.19.0

Voltar para Node 18 (Strapi)
Quando for trabalhar com Strapi:

nvm use 18.20.8

Agora rodar o projeto React + Vite

Com Node 20.19 ativo, vá para a pasta do projeto:
cd ecoapiv2-datapoints-react

Instale novamente (importante!):
npm install

Depois:
npm run dev

Frontend moderno (Vite, Next, React)
→ Node 20 ou 22

Backend legado / Strapi antigo
→ Node 16 ou 18

Dentro de cada projeto, você pode criar um arquivo:
.nvmrc

Exemplo para este projeto React:
20.19.0

Assim, no futuro, basta rodar:
nvm use

E o NVM já sabe qual versão usar.

Nunca misturar no mesmo terminal sem trocar o nvm use

Comando para eu ver todas as versões do node instaladas através do NVM

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

Visualizar o console do navegador:
- clicar em F12 ou botão direito e inspect