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
    ### GET /produtos/:id
    ### POST /produtos
    ### PUT /produtos/:id
    ### DELETE /produtos/:id

## Avaliações

    ### GET /avaliacoes
    ### GET /avaliacoes/:id
    ### PUT /avaliacoes/:id
    ### POST /avaliacoes
    ### DELETE /avaliacoes/:id

## CORS

Esta API tem CORS habilitado para qualquer origem. Você pode consumi-la de qualquer domínio (localhost, Vercel, etc.) sem configuração adicional no cliente.