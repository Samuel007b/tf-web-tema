# API do Restaurante Dona Cida — Documentação de Endpoints

    Base URL (produção): `...`

    ## Convenções

    - Todas as respostas são em JSON
    - Rotas protegidas exigem header `Authorization: Bearer <token>`
    - O campo `senha` nunca é retornado em nenhuma resposta
    - Erros seguem o formato `{ "erro": "mensagem descritiva" }`

## Usuários Administrativos

    ### GET /user
    ### GET /user/:id
    ### POST /user
    ### PUT /user/:id
    ### DELETE /user/:id
    ### POST /user/login

## Produtos
  
    ### GET /produtos
    ### GET /produtos/bebida
    ### GET /produtos/unitario
    ### GET /produtos/pratofeito
    ### GET /produtos/pratoquilo
    ### GET /produtos/:id
    ### GET /produtos/destaque
    ### POST /produtos/bebida
    ### POST /produtos/unitario
    ### POST /produtos/pratofeito
    ### POST /produtos/pratoquilo
    ### PUT /produtos/bebida/:id
    ### PUT /produtos/unitario/:id
    ### PUT /produtos/pratofeito/:id
    ### PUT /produtos/pratoquilo/:id
    ### DELETE /produtos/:id

## Avaliações

    ### GET /avaliacoes
    ### GET /avaliacoes/midia
    ### GET /avaliacoes/estrelas
    ### GET /avaliacoes/:id
    ### GET /avaliacoes/destaque
    ### GET /avaliacoes/destaque/midia
    ### GET /avaliacoes/destaque/estrelas
    ### PUT /avaliacoes/:id
    ### POST /avaliacoes

## CORS

Esta API tem CORS habilitado para qualquer origem. Você pode consumi-la de qualquer domínio (localhost, Vercel, etc.) sem configuração adicional no cliente.