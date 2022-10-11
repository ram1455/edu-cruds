const {Sequelize} = require('sequelize')

const freesql = new Sequelize({
    database: 'sql6525696',
    host    : 'sql6.freesqldatabase.com',
    username : 'sql6525696',
    password : 'yCmE2YUmMl',
    dialect : 'mysql',
    port : '3306'
}); 

(async()=>{
    try {
        await freesql.authenticate();
        console.log('Connection has been established successfully.'); 
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = freesql;

