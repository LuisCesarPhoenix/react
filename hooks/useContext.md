# Hook do react useContext()

## 📌 O que é useContext

- O useContext é um hook do React para compartilhar estado/dados entre vários componentes sem precisar passar props manualmente (prop drilling).
- Ele permite acessar o contexto criado usando o Context.Provider. 
- É um gerenciador de estado global que permite que componentes filhos sejam reativos aos dados do contexto.
- Ele permite acessar um Contexto global/local criado com createContext.

## 📌 O problema que ele resolve (prop drilling)

Sem context:

<App>
  <Layout>
    <Header>
      <Button />  ← precisa do user

Você acaba fazendo:

<App user={user}>
  <Layout user={user}>
    <Header user={user}>
      <Button user={user} />

Isso é:

👉 repetitivo
👉 feio
👉 acoplado
👉 difícil de manter

📌 Com useContext:

- Você cria um contexto e qualquer componente pode acessar direto:
- const user = useContext(UserContext)
- Sem props intermediárias.

## 🔵 Conceitos principais

1. createContext()

- Cria o “canal global”.

2. Provider

- Define quem pode acessar os dados.

3. useContext()

- Consome os dados.
 
## 🔵 Estrutura mental

Pense assim:

- Context = caixa de dados
- Provider = distribui a caixa
- useContext = pega da caixa

## 🔵 Exemplo simples (TypeScript)

1. Criar o contexto: 

// contexts/CounterContext.tsx
import { createContext } from "react"

type CounterContextType = {
  count: number
  increment: () => void
}

export const CounterContext = createContext<CounterContextType | null>(null)

2. Criar o Provider:

import { useState } from "react"
import { CounterContext } from "./CounterContext"

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  )
}

👉 Aqui você define o estado compartilhado.

3. Envolver a aplicação:

<CounterProvider>
  <App />
</CounterProvider>

4. Consumir em qualquer componente:

import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

export function Button() {
  const context = useContext(CounterContext)

  if (!context) return null

  return (
    <button onClick={context.increment}>
      {context.count}
    </button>
  )
}

Pronto.
Sem props. Sem passar nada manualmente.

## 🔵 Quando usar useContext

Use quando os dados são:

✅ Globais ou compartilhados

- usuário logado
- tema (dark/light)
- idioma
- carrinho
- permissões
- configs da app
- alert service (igual ao meu adapter de alertas)

❌ NÃO use para:

- estado local de um componente
- coisas usadas só entre pai → filho direto
- Nesses casos → useState + props é mais simples.

🔵 Dica profissional (padrão mais limpo)

Crie um hook customizado:

export function useCounter() {
  const context = useContext(CounterContext)

  if (!context)
    throw new Error("useCounter deve ser usado dentro do Provider")

  return context
}

Uso:

const { count, increment } = useCounter()

👉 Mais limpo
👉 Tipagem melhor
👉 Menos null

## 🔵 Resumo direto

Conceito =>      Função
createContext => cria o contexto
Provider => 	 fornece dados
useContext => 	 consome dados
Uso ideal => 	 estado global/compartilhado

```text
useContext é um daqueles conceitos que muda sua forma de estruturar aplicações React, então vale estudar com calma e testar na prática.
```

## Sugestão rápida de estudo (bem objetiva):

- criar um contexto simples (ex: contador)
- depois um tema dark/light
- só então aplicar no meu projeto real (ex: AlertAdapter)