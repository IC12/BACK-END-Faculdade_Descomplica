import { Sequelize } from "sequelize";

const sequelize = new Sequelize("lgpd-database", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
  dialectOptions: {
    // Adicione a linha abaixo com o caminho do seu socketPath.
    //socketPath: '/caminho/do/seu/socket.sock'
    // O socketPath é usado mais em ambientes Linux/Mac quando você conecta via Unix socket em vez de TCP/IP.
  },
});

export default sequelize;
