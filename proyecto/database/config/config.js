
module.exports= {
  "development": {
    "username": "root",
    "password": "root",
    "database": "proyectoInt2",
    "host": "127.0.0.1",
    "dialect": "mysql", 
    "port": 3306,
     // Puerto de Simo: 8889
     // Puerto de Juli: 3306
  },
 
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}