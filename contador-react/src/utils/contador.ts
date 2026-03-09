import { Dispatch, SetStateAction } from 'react'
// Tipos do React para garantir tipagem correta do setState

export const adicionar = (
// Define uma função chamada "adicionar".
// Essa função será executada quando o usuário clicar no botão "Adicionar".
  setCount: Dispatch<SetStateAction<number>>
) => {
  // Recebe a função setCount como dependência: 
  // export const adicionar = (setCount: Dispatch<SetStateAction<number>>) => { ... }
  // Não conhece o componente, só executa a lógica

  setCount((prev) => prev + 1)
  // Atualiza o estado "count" passado como parâmetro, somando 1 ao valor atual.
  // Isso dispara uma nova renderização do componente.
  // Usa a forma funcional para evitar problemas de estado assíncrono
}

export const reduzir = (
// Define uma função chamada "reduzir".
// Essa função será executada quando o usuário clicar no botão "Reduzir".
  setCount: Dispatch<SetStateAction<number>>
) => {
  // Recebe a função setCount como dependência: 
  // export const reduzir = (setCount: Dispatch<SetStateAction<number>>) => { ... }
  // Não conhece o componente, só executa a lógica

  setCount((prev) => prev - 1)
  // Atualiza o estado "count" passado como parâmetro, subtraindo 1 do valor atual.
  // Também dispara uma nova renderização do componente.
  // Usa a forma funcional para evitar problemas de estado assíncrono

}

/*
Primeiro: um alerta importante (conceito)

Estado React (useState) NÃO pode viver em utils

Por quê?

- useState é um Hook do React
- Hooks só podem ser usados dentro de componentes ou custom hooks
- utils não é componente nem hook

Solução correta:

- O estado continua no App.tsx
- A lógica de incremento/decremento vai para utils
- O App passa setCount como dependência para as funções utilitárias(./utils/contador.ts)
- Isso é separação de responsabilidade real, não quebra regra de Hooks.

Objetivo final

1. App.tsx
- Continua com useState
- Não tem lógica de incremento/decremento

2. utils/contador.ts
- Contém a lógica adicionar e reduzir
- Recebe setCount como dependência
*/

/*
Regra de ouro:

- Estado → componente ou hook
- Lógica pura → utils
- Integração externa → services
- Dependência externa → adapters
*/

/*
Detalhe importante (boa prática)

Usamos:

- setCount((prev) => prev + 1)

Em vez de:

- setCount(count + 1)
- Isso evita bugs de estado stale.
*/