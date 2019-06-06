const mysql = require('mysql2/promise'); // mysql

module.exports = {
   connect: async function () {
      return await mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'root',
         port: '3306',
         database: 'the_awesome_newpage'
      })
   }
}