import express from 'express';

const app = express()

app.get('/', (req, res, next) => {
    res.end(`${req.method} - ${req.url}`) //dynamique, si on change la methode, elle se met à jour auto
})


app.get('/home', (req, res, next) => {
    res.end('GET : /home') // statique, on doit changer la methode partout
})

app.get('/personne', (req, res, next) => {
    const { nom, prenom } = req.query
    res.end(`Bonjour ${prenom} ${nom}`)
})

app.get('/personne/:nom/:prenom', (req, res, next) => {
    const { nom, prenom } = req.params
    res.end(`Bonjour ${prenom} ${nom}`)
})

app.post('/home', (req, res, next) => {
    res.end('POST : /home')
})

app.all('/', (req, res, next) => {
    res.end(`${req.method}, ${req.url}`) //permet de faire afficher le verbe que l'on souhaite sans afficher all dans la console
})

app.all('/*', (req, res) => {
    res.end(`Route '${req.url}' non définie`)
})

app.listen(3000, () => {
    console.log('Server running in port 3000')
})
//déclaration d'un middleware
// const middleware1 = (req, res, next) => {
//     console.log('middleware1')
//     next()
// }



// app.get('/', (req, res, next) => { //verbe http = get, post, put...
//     res.write("First Express.js Application<br>")
//     //res.write("Second express.js Application<br>")
//     console.log('get')
//     res.end('Hello world')  //pour finir la réponse.

//     //res.send('Hello world')
//     next()

// }, middleware1) // on utiliser le middleware sans l'app

// //utilisation d'un middleware
//app.use(middleware1) // si on veut changer l'ordre du middleware, ne pas oublier de déclarer next avant la req

// app.listen(3000, () => {
//     console.log('server running in port 3000')
// })





