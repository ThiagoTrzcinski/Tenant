# Tenant
Este projeto é uma aplicação simples de gerenciamento de tarefas com suporte para Multi-Tenancy, implementada em Node.js usando Express e Sequelize para interagir com um banco de dados PostgreSQL.

## Objetivo
Permitir que diferentes empresas (tenants) utilizem a aplicação de forma isolada, garantindo que os dados de cada empresa sejam separados.

## Componentes Principais
1. **Configuração do Banco de Dados (config/database.js)**
  Configura a conexão com o banco de dados PostgreSQL utilizando Sequelize. 
2. **Modelos (models/)**
Define a estrutura das tabelas e as relações entre elas.
- Tenant: Representa uma empresa ou organização.
- User: Representa um usuário dentro de uma empresa.
- Task: Representa uma tarefa criada por um usuário.
  
3. **Middleware (middlewares/tenantMiddleware.js)**
  Middleware para validar e configurar o tenant com base no ID fornecido no cabeçalho da requisição (x-tenant-id).
  
4. **Controladores (controllers/)**
  Contêm a lógica de negócio para manipulação dos dados.
  - Tenant Controller: Criação de novos tenants.
  - User Controller: Criação de novos usuários dentro de um tenant.
  - Task Controller: Criação e listagem de tarefas dentro de um tenant.
  
5. **Rotas (routes/)**
  Define os endpoints da API e vincula as rotas aos controladores.
  - Tenant Routes: Rotas relacionadas aos tenants.
  - User Routes: Rotas relacionadas aos usuários.
  - Task Routes: Rotas relacionadas às tarefas.
  
6. **Servidor (server.js)**
  Configura e inicia o servidor Express.
  - Configura middleware para parse de JSON.
  - Define as rotas da API.
  - Sincroniza o banco de dados e inicia o servidor.
  
## Conclusão
Esta implementação fornece uma base sólida para um sistema de gerenciamento de tarefas multi-tenant. A separação de responsabilidades entre configuração, modelos, controladores, middleware e rotas torna o código organizado e fácil de manter.
