import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'lgpd-database',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamps: false
        },
        dialectOptions: {
            // Adicione a linha abaixo com o caminho do seu socketPath. Precisa instalar o servidor PostgreSQL
            socketPath: '/caminho/do/seu/socket.sock'
          }
    }
);

export default sequelize;