# Todas as estruturas condicionais e laços de repetição do TypeScript

Abaixo estão todas as estruturas condicionais e laços de repetição do TypeScript, com explicação objetiva e exemplos simples, focando em uso real.


## Estruturas condicionais:

### 1. if

Executa um bloco se a condição for verdadeira.

if (idade >= 18) {
  console.log("Maior de idade");
}

### 2. else

Executa quando o if é falso.

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

### 3. else if

Permite múltiplas condições encadeadas.

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else {
  console.log("Reprovado");
}

### 4. switch

Usado quando existem vários casos fixos para a mesma variável.

switch (status) {
  case "ativo":
    console.log("Usuário ativo");
    break;
  case "inativo":
    console.log("Usuário inativo");
    break;
  default:
    console.log("Status desconhecido");
}

### 5. Operador ternário ? :

Forma curta de if/else para decisões simples.

const acesso = idade >= 18 ? "Permitido" : "Negado";


## Laços de repetição

### 1. for

Usado quando você sabe quantas vezes vai repetir.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

Obs: i++ => i = i + 1 

### 2. while

Executa enquanto a condição for verdadeira.

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

Obs: contador++ => contador = contador + 1

### 3. do...while

Executa ao menos uma vez, mesmo se a condição for falsa.

let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);

### 4. for...in

Itera sobre chaves de um objeto ou índices de um array.

- Uso comum: objetos.

const usuario = { nome: "Luis", idade: 30 };

for (const chave in usuario) {
  console.log(chave, usuario[chave as keyof typeof usuario]);
}

### 5. for...of

Itera sobre valores de estruturas iteráveis (arrays, strings, etc.).

- Uso comum: arrays, listas, resultados de banco.

const numeros = [10, 20, 30];

for (const numero of numeros) {
  console.log(numero);
}

## Resumo prático de quando usar

- if / else / else if → decisões baseadas em lógica

- switch → quando existem vários casos fixos para a mesma variável

- for → repetição controlada

- while → repetição baseada em condição

- do...while → executa ao menos uma vez, mesmo se a condição for falsa

- for...in → objetos

- for...of → arrays e iteráveis