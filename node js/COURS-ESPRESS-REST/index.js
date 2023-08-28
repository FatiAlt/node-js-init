import  express from "express"
import personne from './routes/personne.route.js'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send({ "Message" : "Welcome in Express REST API" })
})

app.use('/personne', personne)

app.all("/*", (req, res) => {
    res.send({ "erreur" : `${req.url} 404 Nod Found` })
})

app.listen(3000, () => console.log("Server running in 3000"))

