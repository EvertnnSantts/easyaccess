const { sequelize, Sequelize } = require('./ConnectionDB');

const SignUp = sequelize.define('SignUp', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Sincroniza o modelo com o banco de dados
SignUp.sync({ force: false }).then(() => {
    console.log('Modelo "SignUp" sincronizado com o banco de dados.');
}).catch(err => {
    console.error('Erro ao sincronizar modelo "SignUp":', err);
});

module.exports = SignUp;
