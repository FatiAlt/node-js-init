import mysql from 'mysql2';



export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cours_expressjs',
    port: 8889
})

connection.connect((err) => {
    if (err)  console.log(`Problème de connexion à la BD : ${err}`)
    else console.log('Connexion établie avec la base de données')
})
