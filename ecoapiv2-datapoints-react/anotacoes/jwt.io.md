# 🔑 1. jwt.io — Decoder, Verifier & Generator

## 👉 Ferramenta online clássica para decodificar e verificar JWTs.

- Você pode colar um token para ver header, payload e claims.

- Também pode verificar a assinatura informando a chave.

- Possui documentações e links para bibliotecas.

## 🌐 jwt.io — JSON Web Token Debugger

🔎 O jwt.io é basicamente um laboratório visual de JWT.

Você usa para 3 coisas principais:

- Decodificar/debug de tokens existentes

- Validar/verificação de assinatura

- Gerar tokens de teste e aprender estrutura de JWT

## ✅ Como usar na prática

- Acesse: https://jwt.io

- Você verá 3 colunas:

- HEADER | PAYLOAD | VERIFY SIGNATURE

🔵 1) Decodificar um token (uso mais comum)
Passos:

Copie seu token JWT (string grande com 3 partes separadas por ponto)
Ex:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cCI6MTczNzAwMDAwMH0.abc123...


Cole no campo Encoded (lado esquerdo, topo)

Resultado:

Automaticamente ele mostra:

HEADER
{
  "alg": "HS256",
  "typ": "JWT"
}

PAYLOAD
{
  "userId": 1,
  "exp": 1737000000
}


👉 Agora você consegue ler as claims humanas.

Muito útil para:

ver exp

ver iat

ver userId

debugar permissões

🔵 2) Verificar assinatura (validar SECRET)

Se você usa:

jwt.sign(payload, process.env.SECRET_KEY)


Então pode testar se o token foi realmente assinado com essa chave.

Passos:

Cole o token

No lado direito (VERIFY SIGNATURE)

Campo "your-256-bit-secret"

Cole sua SECRET

Ex:

minha_chave_super_secreta_123

Resultado:

Se estiver correto:

Signature Verified ✓


Se estiver errado:

Invalid Signature ✗


👉 Isso é ótimo para:

testar se o backend está assinando certo

descobrir erro de chave errada

debug de autenticação

🔵 3) Gerar token manualmente (para testes)

Você também pode editar o payload.

Exemplo:

No PAYLOAD, escreva:

{
  "id": 10,
  "role": "admin"
}


Coloque sua secret.

👉 O site gera automaticamente um token novo no topo.

Agora você pode:

testar no Postman

testar no Insomnia

chamar sua API protegida

🔵 4) Testar no seu backend

Exemplo com sua API:

Header HTTP:
Authorization: Bearer SEU_TOKEN_AQUI

⚠️ Segurança (muito importante)

NUNCA:
❌ colar SECRET real de produção
❌ colar token real de usuário

Use:
✔ ambiente local
✔ tokens fake

Porque é ferramenta pública.

🎯 Quando você vai usar no dia a dia

No seu cenário (Node + JWT + API):

Você vai usar jwt.io principalmente para:

ver claims rapidamente

conferir expiração

validar assinatura

gerar token admin fake pra teste

Eu uso praticamente todo dia em debug de auth.

Você está fazendo exatamente o que diferencia um dev júnior de um dev mais maduro:
não só usar as ferramentas, mas entender como testar, validar e debugar autenticação.

JWT + jwt.io + Postman/Insomnia é praticamente o kit padrão de debug de backend Node.

Quando aparecer erro tipo:

401 Unauthorized

Invalid signature

Token expired

Payload estranho

👉 primeira coisa: colar no jwt.io e inspecionar.

Economiza muito tempo.