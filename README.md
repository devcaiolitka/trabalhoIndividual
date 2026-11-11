# Projeto Individual – CRUD de Pessoas

Aplicação full stack com CRUD (Create, Read, Update, Delete) da entidade **pessoa**.

- **backend/**: API REST em Node.js + Express 5 + PostgreSQL (`pg`)
- **frontend/**: interface em React + Vite

## Pré-requisitos
- Node.js 20+
- PostgreSQL rodando em `localhost:5432` (usuário `postgres`, senha `postgres`)

## 1. Banco de dados
Criar o banco e a tabela (pgAdmin ou psql):
```sql
CREATE DATABASE banco_caio;
```
Depois, conectado ao `banco_caio`, executar `backend/script/criar_tabela.sql`.

Via terminal:
```bash
"C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -d banco_caio -f backend/script/criar_tabela.sql
```

## 2. Backend (porta 3000)
```bash
cd backend
npm install
npm start
```

### Rotas
| Método | Rota | Ação |
|---|---|---|
| GET | /pessoas | Lista todas |
| GET | /pessoas/:id | Busca por id |
| POST | /pessoas | Cria (`{ "pes_nome": "..." }`) |
| PUT | /pessoas/:id | Atualiza (`{ "pes_nome": "..." }`) |
| DELETE | /pessoas/:id | Exclui |

## 3. Frontend (porta 5173)
Em outro terminal:
```bash
cd frontend
npm install
npm run dev
```
Acesse http://localhost:5173

## Estrutura
```
backend/
  index.js          # servidor Express + CORS
  db.js             # conexão PostgreSQL
  routes/           # rotas /pessoas
  controllers/      # regras das requisições
  models/           # consultas SQL
  script/           # SQL de criação da tabela
frontend/
  src/App.jsx       # tela de CRUD
```
