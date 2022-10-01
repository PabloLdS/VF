export const sqlConfig = {
    server: 'localhost', //escola 10.68.102.4
    port: 1433,//1433
    user: 'sa',
    password: 'pedro', //Admin2018@
    database: 'VeryFlores',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 15000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}