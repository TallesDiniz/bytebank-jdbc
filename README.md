# 🏦 ByteBank JDBC

Projeto de simulação de um sistema bancário desenvolvido em **Java** com acesso a banco de dados via **JDBC** (Java Database Connectivity). Iniciado como parte dos estudos na plataforma [Alura](https://www.alura.com.br/) e evoluído com a adição de uma **API REST** com Spring Boot e um **frontend moderno** em React.

---

## 📋 Sobre o Projeto

O ByteBank é uma aplicação full stack que simula operações bancárias básicas, como cadastro de contas e movimentações financeiras. O backend utiliza JDBC puro para persistência de dados e expõe uma API REST via Spring Boot. O frontend foi desenvolvido em React + TypeScript + Tailwind CSS e consome essa API.

---

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 17** — Linguagem principal
- **Spring Boot 3** — API REST
- **JDBC** — Conexão e manipulação do banco de dados
- **HikariCP** — Pool de conexões de alta performance
- **Maven** — Gerenciamento de dependências e build
- **Microsoft SQL Server** — Banco de dados relacional

### Frontend
- **React 19** — Interface do usuário
- **TypeScript** — Tipagem estática
- **Tailwind CSS v3** — Estilização
- **Vite** — Bundler e servidor de desenvolvimento
- **react-hot-toast** — Notificações

---

## 📁 Estrutura do Projeto
```
bytebank-jdbc/
├── src/
│   └── main/
│       └── java/
│           └── br/com/alura/bytebank/
│               ├── domain/
│               │   ├── cliente/             # Entidades e DAOs relacionados ao cliente
│               │   └── conta/               # Entidades e DAOs relacionados à conta
│               ├── BytebankApplication.java # Classe principal (Spring Boot)
│               ├── ContaController.java     # Controller REST
│               └── ConnectionFactory.java   # Configuração do pool de conexões (HikariCP)
├── frontend/
│   ├── src/
│   │   ├── components/                      # Componentes React
│   │   ├── pages/                           # Páginas da aplicação
│   │   ├── services/                        # Chamadas à API
│   │   └── types/                           # Tipagens TypeScript
│   ├── package.json
│   └── vite.config.ts
├── config.properties.example               # Exemplo de configuração do banco
├── pom.xml
└── README.md
```

---

## ⚙️ Como Executar

### Pré-requisitos

- Java 17+
- Maven 3.6+
- Microsoft SQL Server
- Node.js 18+

### 1. Clone o repositório
```bash
git clone https://github.com/Pgustavols/bytebank-jdbc.git
cd bytebank-jdbc
```

### 2. Configure o banco de dados

No SQL Server, crie o banco e a tabela:
```sql
CREATE DATABASE bytebank;

USE bytebank;

CREATE TABLE conta (
    numero INT PRIMARY KEY,
    saldo DECIMAL(10,2) DEFAULT 0,
    cliente_nome VARCHAR(100) NOT NULL,
    cliente_cpf VARCHAR(11) NOT NULL,
    cliente_email VARCHAR(100) NOT NULL
);
```

### 3. Configure a conexão

Crie o arquivo `config.properties` na raiz do projeto baseado no `config.properties.example`:
```properties
db.url=jdbc:sqlserver://localhost;databaseName=bytebank;encrypt=false
db.user=sa
db.password=SUA_SENHA_AQUI
```

### 4. Execute o backend
```bash
mvn spring-boot:run
```

O servidor vai subir em `http://localhost:8080`.

### 5. Execute o frontend
```bash
cd frontend
npm install
npm run dev
```

O frontend vai subir em `http://localhost:5173`.

---

## 🔌 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/contas` | Lista todas as contas |
| POST | `/contas` | Abre uma nova conta |
| DELETE | `/contas/{numero}` | Encerra uma conta |
| POST | `/contas/{numero}/depositar` | Realiza um depósito |
| POST | `/contas/{numero}/sacar` | Realiza um saque |
| POST | `/contas/transferir` | Realiza uma transferência |

---

## 🔧 Funcionalidades

- [x] Cadastro de contas bancárias
- [x] Listagem de contas
- [x] Depósito e saque
- [x] Transferência entre contas
- [x] Encerramento de conta
- [x] Persistência com JDBC
- [x] API REST com Spring Boot
- [x] Frontend em React + TypeScript
- [x] Tratamento de erros e notificações toast

---

## 📚 Aprendizados

Este projeto aborda os seguintes conceitos:

- Conexão com banco de dados utilizando `DriverManager`
- Gerenciamento de pool de conexões com **HikariCP**
- Uso de `PreparedStatement` para queries parametrizadas
- Padrão **DAO** (Data Access Object) para separação de responsabilidades
- Criação de API REST com **Spring Boot**
- Integração entre frontend React e backend Java
- Tipagem com **TypeScript** e interfaces
- Componentização com **React**
- Tratamento de erros e feedback visual com **react-hot-toast**
- Externalização de configurações com `config.properties`

---

## 👤 Autores

**Paulo Gustavo** — [@Pgustavols](https://github.com/Pgustavols) — Backend (Java + JDBC)

**Talles Diniz** — [@TallesDiniz](https://github.com/TallesDiniz) — Frontend (React + TypeScript)