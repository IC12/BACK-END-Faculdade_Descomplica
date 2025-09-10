# 📌 Strategies Back-End
Exercícios usando **Modelo MVC**, **API RESTful**, **Spring Boot**, **Spring Data JPA**, **Spring Security** e **Swagger**.

---

# ⚙️ Intermediary Full-Stack
Exercícios usando **Angular**, **NodeJS** e **API Restful**.

---

# 🚀 Advanced DevOps
Conceitos de **Docker**, **Kubernetes**, **Rancher**, **CI/CD** e **DevOps**.

📂 Repositório dos projetos do professor: <https://github.com/FaculdadeDescomplica/Advanced-BackEnd>

---

# ▶️ Como rodar os projetos (Back-End e Front-End)

## 🔙 Rodando o Back-End
1. Instale o **Node.js** em sua máquina.  
2. Abra o projeto **lgpd-back** na pasta raiz usando **VS Code** ou outra IDE que preferir.  
3. No terminal, rode:  
   `npm install` 
   Esse comando instala ou atualiza todas as dependências do projeto.

4. ⚠️ Caso dê erro ao rodar `npm install`, pode ser bloqueio de scripts do **PowerShell**:  
   `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
   Depois, tente novamente `npm install`.

5. Configure o banco de dados **PostgreSQL**:  
   - Verifique o arquivo `utils/database.js` para as configurações;  
   - Instale o **PostgreSQL** no Windows;
   - Crie um banco com o mesmo nome do Sequelize:  
     CREATE DATABASE "lgpd-database";  
   - Crie as tabelas do projeto usando os scripts do arquivo `lgpd-database.sql` encontrado na pasta database.

6. Para rodar o back-end:  
   `node index.js`

---

## 🎨 Rodando o Front-End
1. Dentro da pasta do projeto **lgpd-front**, rode:  
   `npm install`

2. Instale a versão do Angular usada no projeto (15.0.5):  
   `npm install -g @angular/cli@15.0.5`

3. Para rodar o front-end:  
   `ng serve`

4. Após iniciar, o projeto ficará disponível em:  
   http://localhost:4202

---

# 🔎 Testes de APIs (Postman)
Recomendo usar o **Postman** para testar as APIs existentes nesse projeto.
Deixei o arquivo da collection `Project_LGPD_Pós.postman_collection.json` dentro da pasta postman para que possa exportar dentro do Postman.

## 📥 Como importar a Collection no Postman ##

```postman
- Abra o Postman;

- Clique em Import (opção 3 traços canto superior esquerdo);

- Selecione a opção File/Import... e carregue o arquivo Project_LGPD_Pós.postman_collection.json disponível no repositório;

- A collection aparecerá na aba lateral do Postman, pronta para ser usada.