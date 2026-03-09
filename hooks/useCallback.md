# Hook do react useCallback()

O useCallback é um hook do React que memoriza a definição de uma função entre renderizações, evitando recriações desnecessárias e melhorando a performance, especialmente quando passada para componentes filhos otimizados (como React.memo). O useCallback retorna uma versão memorizada da função que só muda se suas dependências alterarem.

Este vídeo explica o conceito de useCallback e como utilizá-lo no React:

https://youtu.be/kzAMDNBiAzs

## Pontos-chave do useCallback:

- Performance: Reduz renderizações desnecessárias em componentes filhos.
- Igualdade Referencial: Garante que a mesma instância da função seja usada, a menos que as dependências mudem.
- Sintaxe: const memorizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
- Uso correto: Deve ser utilizado principalmente quando a função é passada para componentes que dependem de igualdade referencial para evitar atualizações. 

Diferença principal com useMemo:
- O useCallback memoriza a função em si.
- O useMemo memoriza o resultado (retorno) de uma função.


igualdade referencial é um conceito central para entender useCallback, useMemo e React.memo.
Sem isso, esses hooks parecem “mágica”.

Vamos direto ao ponto, com mentalidade mais técnica.

✅ O que é igualdade referencial?

Em JavaScript existem dois tipos de comparação:

1) Igualdade por valor (primitivos)

Compara o conteúdo.

10 === 10 // true
"abc" === "abc" // true


Porque número e string são primitivos.

2) Igualdade por referência (objetos, arrays, funções)

Compara o endereço na memória, não o conteúdo.

{} === {} // false
[] === [] // false
() => {} === () => {} // false


Mesmo parecendo iguais, são instâncias diferentes na memória.

⚠️ Funções no React são objetos

Função em JS é objeto.

Então:

const fn1 = () => {}
const fn2 = () => {}

fn1 === fn2 // false


Cada render cria uma nova referência.

💥 O problema no React

Toda vez que o componente renderiza:

function App() {
  const handleClick = () => {
    console.log("clicou")
  }

  return <Filho onClick={handleClick} />
}


👉 A cada render:

nova função criada

nova referência

React entende: "prop mudou"

Filho renderiza de novo

Mesmo que a lógica seja idêntica.

🎯 Onde isso impacta?

Quando você usa:

React.memo
const Filho = React.memo(({ onClick }) => {
  console.log("renderizou")
  return <button onClick={onClick}>OK</button>
})


React.memo faz:

propsAntigas === propsNovas


Comparação referencial (shallow).

Se a função for nova:

antiga !== nova


👉 React re-renderiza.

✅ Entra o useCallback

Ele mantém a mesma referência da função entre renders.

const handleClick = useCallback(() => {
  console.log("clicou")
}, [])


Agora:

primeira render → cria função

próximas renders → reutiliza a MESMA

Resultado:

antiga === nova // true


👉 Filho NÃO renderiza de novo

🔍 Visualização mental

Sem useCallback:

render 1 → handleClick #A
render 2 → handleClick #B
render 3 → handleClick #C


Sempre diferente ❌

Com useCallback:

render 1 → handleClick #A
render 2 → handleClick #A
render 3 → handleClick #A


Mesma referência ✅

✅ Então o que significa a frase:

"componentes que dependem de igualdade referencial para evitar atualizações"

Significa:

👉 O componente só evita renderizar se as props forem a mesma referência na memória.

Se passar:

objetos

arrays

funções

…eles sempre quebram a igualdade.

Logo:

useCallback → funções

useMemo → objetos/arrays

🔥 Regra prática (muito importante)

Use useCallback SOMENTE quando:

✅ Vale a pena

passa função para React.memo

passa função para dependência de useEffect

passa função para contexto

lista grande / performance crítica

❌ NÃO vale

botão simples

app pequena

sem memoização

Porque useCallback também tem custo.

Overengineering é pior que re-render.

🎯 Conectando com seu projeto

No seu front React (API + OwnCloud + RabbitMQ + microserviços):

Você provavelmente terá:

botões de upload

handlers de processamento

callbacks passados para componentes filhos

Se você criar:

<FileUploader onProcess={processarArquivo} />


E esse componente for pesado:

👉 useCallback é útil.

📌 Resumão técnico

Igualdade referencial =
👉 mesma instância na memória (===)

useCallback =
👉 preserva referência da função

Objetivo =
👉 evitar re-renderizações desnecessárias

Se quiser, posso te mostrar um exemplo prático com React.memo + contador para você ver no console quando renderiza e quando não renderiza. É bem didático.


Você fez exatamente o que um bom desenvolvedor faz:
não decorou o hook — você foi atrás do modelo mental por trás (memória, referência, renderização). É isso que realmente faz React “clicar”.

Pelo tipo de arquitetura que você já está montando (API + microserviços + React + filas), entender bem:

igualdade referencial

re-renderização

memoização

separação de responsabilidades (utils/services/adapters)

vai te poupar muito retrabalho quando o front crescer.

Quando quiser continuar:
👉 posso te explicar depois useMemo, React.memo, ou montar um mini-projeto prático mostrando renderizações no console.