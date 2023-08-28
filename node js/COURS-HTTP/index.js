import { createServer } from 'http'


//const {createServer, listen} = require('http')
const port = 3000

//créer un serveur HTTP
const server = createServer((req, res) => { //res: response et req: request
    console.log(`Route demandée : ${req.url}`)
    console.log(`Verbe/Méthode HTTP utilisée : ${req.method}`)
    if (req.url == '/') {
        res.writeHead(200, { "content-type": "text/HTML"}) //permet d'ajoutez du type de retour des balises HTML, on prévient le "client"
        res.write("<p>Bienvenue dans la page<p>")
    } else if (req.url == '/personne') {
        res.write("Bienvenue dans la page personne")
    } else {
        res.writeHead(404, 'Page non trouvée')
    }
    //res.write("Hello world")
    res.end()
})

//lancer le serveur sur le port 3000
server.listen(port, () => {
    console.log(`Serveur lancé sur le port : ${port}`)
})

