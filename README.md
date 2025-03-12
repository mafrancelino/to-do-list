# To-Do List API

API para gerenciamento de tarefas utilizando NestJS e PostgreSQL.

## Requisitos

- Docker e Docker Compose
- Node.js 18+

## Como rodar o projeto

```sh
make install   # Instala as dependências
make run       # Inicia os containers
make stop      # Para os containers
make restart   # Reinicia os containers
```

## Banco de Dados

```sh
make migrate            # Executa as migrations
make generate-migration # Gera uma nova migration
```

## Testes e Lint

```sh
make test      # Executa os testes
make lint      # Verifica o lint
make format    # Formata o código
```

## Acesso à API

A documentação da API pode ser acessada via Swagger em:
[http://localhost:3001/api](http://localhost:3001/api)

