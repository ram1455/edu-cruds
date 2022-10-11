const {Sequelize} = require('sequelize')

const remotesequelize = new Sequelize({
    database: 'zhrVVYFUXx',
    host    : 'localhost',
    username : 'zhrVVYFUXx',
    password : 'wz4odVLaL8',
    dialect : 'mysql',
    port : 3306
});

(async()=>{
    try {
        await remotesequelize.authenticate();
        console.log('Connection has been established successfully.'); 
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = remotesequelize;