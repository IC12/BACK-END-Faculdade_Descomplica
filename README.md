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
   - Verifique o arquivo `utils/database.js` para as configurações.  
   - Instale o **PostgreSQL** no Windows.  
   - Crie um banco com o mesmo nome do Sequelize:  
     CREATE DATABASE "lgpd-database";  
   - Crie as tabelas do projeto usando os scripts do arquivo `lgpd-database.sql`.

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
