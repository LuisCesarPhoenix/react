# Explicação do Conteúdo (useEffect)

O vídeo ensina como usar o hook useEffect no React para fazer chamadas a uma API. Abaixo está a explicação clara e em etapas:

## 1. O que é useEffect

useEffect é um hook do React que permite executar código em momentos específicos do ciclo de vida de um componente (por exemplo, depois que ele renderiza).

Ele serve para tarefas como buscar dados de uma API, atualizar o DOM ou assinar eventos.

## 2. Por que usar useEffect para API

Em React, não é recomendado fazer chamadas de API diretamente no corpo da função do componente porque isso causa chamadas repetidas a 
cada renderização.

useEffect resolve isso ao permitir que você especifique quando a chamada deve acontecer (por exemplo, apenas uma vez quando o componente for exibido).

## 3. Sintaxe Básica

```text
O padrão básico é:

useEffect(() => {
  // código que você quer executar
}, [array de dependencias]);
```

- A função dentro do useEffect é executada depois que o componente renderiza.

Importante:

O array de dependências ([]) controla quando o efeito deve rodar:

- [] (array vazio): roda somente uma vez após a primeira renderização ou quando o componente monta. 

- [variavel1, variavel2]: roda toda vez que qualquer uma dessas variáveis mudar.

- Sem array → roda após cada renderização.

## 4. Fazendo a Chamada à API

```text
A chamada à API é feita assim:

useEffect(() => {
  fetch("URL_DA_API")
    .then(resposta => resposta.json())
    .then(dados => {
      setState(dados);
    });
}, [array de dependencias]);
```

- fetch: método que busca os dados da API.

- .then(): usado para tratar o retorno da API.

- setState: salva os dados no estado do componente para uso posterior.

## 5. Por que usar o useEffect com API

- Evita loops infinitos de renderização.

- Garante que a requisição só será feita quando necessário (por exemplo, ao montar o componente).

## 6. Exemplo Completo

- Criar um estado no componente (useState) para guardar os dados.

- Dentro do useEffect, chamar a API.

- Atualizar o estado com os dados retornados.

- Usar os dados no JSX para mostrar algo na tela (lista, texto etc.).

- React é uma biblioteca de JavaScript usada para construir interfaces (UI).

- useState: guarda e atualiza dados no componente.

- useEffect: roda efeitos colaterais (como chamar API) baseada em dependências.

# Explicação do Conteúdo(useState, useEffect e custom hooks)
 
## 1. Contexto: o que são React Hooks

No React moderno, hooks são funções especiais que permitem usar recursos do React dentro de componentes funcionais (antes isso só era possível em classes).

Principais objetivos dos hooks:

- Gerenciar estado dentro de um componente.

- Executar efeitos colaterais (como chamadas de API ou manipular timers).

- Reutilizar lógica entre componentes.

## 2. Principais Hooks

1. useState

O que faz: cria uma variável de estado dentro de um componente funcional.

Como funciona (conceito):

- Você declara o estado e uma função para atualizá-lo.

- Quando o estado muda, o componente re-renderiza.

Exemplo conceitual:

- const [valor, setValor] = useState(inicial);

Descrição:

- valor: o estado atual.

- setValor: a função que atualiza esse estado.

- Esse hook substitui o this.state e this.setState usados em classes.

2. useEffect

O que faz: executa código depois que o componente renderiza.

Quando ele roda:

- Quando o componente “monta” (carrega).

- Quando uma dependência muda (se você passar variáveis no array de dependência).

Ele é usado para efeitos colaterais, como:

- chamadas de API

- timers

- observadores

- atualizações fora do React.

Exemplo conceitual:

useEffect(() => {
  console.log("Executa depois da renderização.");
}, [array de dependencia]);

- A função dentro do useEffect é executada depois que o componente renderiza.

Importante:

O array de dependências ([]) controla quando o efeito deve rodar:

- [] (array vazio): roda somente uma vez após a primeira renderização ou quando o componente monta. 

- [variavel1, variavel2]: roda toda vez que qualquer uma dessas variáveis mudar.

- Sem array → roda após cada renderização.

3. Custom Hooks (Hooks personalizados)

É possível criar seus próprios hooks quando você tem lógica que precisa ser reutilizada em vários componentes.

Padrão de criação:

Um custom hook começa com use

Ele encapsula lógica que usa outros hooks

Exemplo conceitual:

function useContadorInicial(inicial) {
  const [valor, setValor] = useState(inicial);
  function incrementar() {
    setValor(valor + 1);
  }
  return [valor, incrementar];
}

Depois você usa isso em qualquer componente como se fosse um hook nativo.

## 3. Por que os Hooks são importantes

Os hooks permitem:

Código mais limpo e modular

Evitar classes (com menos complexidade)

Reutilizar lógica facilmente

Separar lógica de UI e lógica de estado/efeitos

Hooks mudaram como se escreve React em muitos projetos por permitir componentes funcionais que fazem coisas que antes só classes faziam.

Resumo em uma Frase:

```text
Esse estudo ensina o conceito de React Hooks, como usar os básicos (useState e useEffect) e como criar custom hooks para organizar e reutilizar lógica de estado e efeitos em componentes funcionais no React.
```

# Exemplo Simples de Renderização de Componente

Componente React Funcional:

```text
function Saudacao() {
  return <h1>Olá, mundo</h1>;
}
```

## O que acontece aqui (passo a passo):

- O React chama a função Saudacao()

- Isso é a renderização do componente.

- A função é executada como qualquer outra função JavaScript.

- A função retorna JSX: <h1>Olá, mundo</h1>

- Esse JSX é convertido internamente pelo React em elementos JavaScript.

- O React usa isso para decidir o que deve aparecer na tela.

- O React atualiza o DOM

- O <h1>Olá, mundo</h1> aparece no navegador.

- Esse processo é chamado de commit da renderização.

## ➡️ Isso é uma renderização de componente:

Executar a função do componente para gerar a UI(user interface).

Exemplo com useState (renderização dinâmica):

```text
function Contador() {
  const [contador, setContador] = React.useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

Primeira renderização (montagem):

- O React chama Contador()

- contador começa com valor 0

O JSX renderiza:

- Valor: 0
- [Incrementar]

## ➡️ Isso é a renderização inicial do componente.

Segunda renderização (atualização):

- O usuário clica no botão

- setContador(1) é chamado

- O estado muda

- O React chama Contador() novamente

Novo JSX:

- Valor: 1

## ➡️ Isso é uma nova renderização do componente.

Onde o useEffect entra nisso?

```text
useEffect(() => {
  console.log("Componente renderizado");
}, [array de dependências]);
```

Ordem correta dos eventos:

a) React chama o componente → renderiza

b) React atualiza o DOM

c) Depois disso, o useEffect é executado

Por isso a frase é correta:

A função dentro do useEffect é executada depois que o componente renderiza.

Comparação mental simples

Renderizar = executar a função do componente e gerar JSX

useEffect = executar código após a UI já estar na tela

Frase-chave para fixar:

```text
Sempre que o estado ou as props mudam, o React reexecuta a função do componente.
Isso é uma renderização.
```