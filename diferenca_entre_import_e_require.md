# Qual a diferença entre import e require?

## Essa dúvida é fundamental para entender TypeScript, Node.js e módulos.

- Você NÃO deve usar os dois ao mesmo tempo porque pode causar conflito.
- Você escolhe UM ou OUTRO, dependendo do tipo de módulo do seu projeto.

Abaixo está a explicação clara e prática.

## 1. import (ES Modules)

```text
import Swal from 'sweetalert2'
```

### O que é

- Sintaxe moderna (ESM – ECMAScript Modules)
- Padrão oficial do TypeScript e do JavaScript moderno
- Funciona nativamente no frontend e no Node.js moderno

### Quando usar

Use import quando:

- Seu projeto é TypeScript
- Seu projeto usa Vite, React, Next, Angular
- Seu tsconfig.json usa module: "ESNext" ou "NodeNext"
- Seu package.json tem "type": "module"

### Vantagens:

- Tipagem automática no TypeScript
- Melhor tree-shaking
- Código mais limpo
- Compatível com bundlers modernos

### Exemplo correto (TypeScript / React)

- import Swal from 'sweetalert2'
- Swal.fire('Sucesso!', 'Operação realizada.', 'success')

## 2. require (CommonJS)

```text
const Swal = require('sweetalert2')
```

### O que é

- Sistema antigo de módulos do Node.js
- Muito usado em projetos Node.js antigos
- Não é o padrão do TypeScript moderno

### Quando usar

Use require quando:

- Seu projeto é JavaScript puro
- Seu package.json NÃO tem "type": "module"
- Seu projeto é CommonJS legado
- Você está rodando diretamente no Node sem bundler moderno

### Desvantagens

- Tipagem pior no TypeScript
- Não suporta tree-shaking adequadamente
- Sintaxe mais verbosa

## 3. Posso misturar import e require?

❌ Na prática profissional não

Misturar pode causar:

- Erros de runtime
- Problemas de tipagem
- Confusão de escopo
- Incompatibilidade com bundlers

Exemplo errado:

- import Swal from 'sweetalert2'
- const Swal = require('sweetalert2') // ❌ conflito

## 4. Qual devo usar no meu caso?

Pelo contexto (TypeScript, React, API moderna):

- Use SEMPRE import
- Ignore completamente o require
- O site do SweetAlert2 mostra os dois apenas para atender projetos antigos.

## 5. Resumo direto

- Projeto moderno / TypeScript / React → import
- Projeto antigo / Node CommonJS       → require
- Nunca usar os dois juntos

## 6. Dica extra (erro comum, mas que dá dor de cabeça)

Erro típico:

- Cannot use import statement outside a module

Significa:

- Projeto CommonJS tentando usar import

Solução:

- Ajustar package.json ou tsconfig
- Ou usar require (não recomendado para o meu projeto)