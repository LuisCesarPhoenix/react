# VAR, LET e CONST

A seguir está uma explicação objetiva, técnica e prática sobre var, let e const em TypeScript, com foco em diferenças reais de comportamento e quando usar em projetos profissionais.

## 1. var

Características:

- Escopo de função, não de bloco

- Sofre hoisting (é “içada” para o topo da função)

- Pode ser re-declarada e reatribuída

- Comportamento legado do JavaScript

Exemplo problemático:

if (true) {
  var x = 10;
}
console.log(x); // 10 (vaza do bloco)

var a = 1;
var a = 2; // permitido

Quando usar:

- Praticamente nunca

- Apenas para manter código legado antigo

Não é recomendada em projetos modernos

### 2. let

Características:

- Escopo de bloco ({})

- Não permite redeclaração no mesmo escopo

- Permite reatribuição

- Resolve os problemas clássicos do var

Exemplo:

if (true) {
  let y = 20;
}
console.log(y); // Erro: y não existe fora do bloco

let contador = 0;
contador = 1; // permitido

Quando usar:

- Quando o valor vai mudar

- Contadores, estados, flags

- Laços (for, while)

### 3. const

Características:

- Escopo de bloco

- Não permite reatribuição

- Deve ser inicializada na declaração

- Garante segurança e previsibilidade

Exemplo:

const PI = 3.14;
PI = 3.15; // Erro

Importante (pegadinha comum):

- const não torna o objeto imutável, apenas a referência.

const user = { nome: "Luis" };
user.nome = "Carlos"; // permitido

user = {}; // Erro

Quando usar:

- Padrão principal

- Valores fixos

- Objetos e arrays que não serão reatribuídos

- Configurações, dependências, resultados de funções

### 4. Comparação direta

-----------------------------------------------------------------------
| Característica    | var        | let           | const              |
-----------------------------------------------------------------------
| Escopo            | Função     | Bloco         | Bloco              |
| Redeclaração      | Sim        | Não           | Não                |
| Reatribuição      | Sim        | Sim           | Não                |
| Hoisting          | Sim        | Sim (TDZ)     | Sim (TDZ)          |
| Uso recomendado   | Nunca      | Quando muda   | Padrão             |
-----------------------------------------------------------------------


### 5. Regra prática para projetos TypeScript

- Use const sempre.

- Use let apenas quando precisar mudar o valor.

- Evite var completamente.

Exemplo profissional:

const users = await userService.findAll();
let total = 0;

for (const user of users) {
  total += user.age;
}