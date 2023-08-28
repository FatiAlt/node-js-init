import { Personne } from '../models/personne.js';
import { connection } from '../config/database.js'

let personnes = [
    new Personne(1, "wick", "john"),
    new Personne (2, "dalton", "john"),
    new Personne(3, "Sasa", "Ivana"),
]

//middleware
export const findAll = (request, response, next) => {
    const sql = "SELECT * FROM personne"
    connection.query(sql, (error, result) => {
        if(error) console.log(`Problème de récupération de données :${error}`);
        else {
            return response
            .status(200)
            .json(result)
        }
    })
 }

export const findById = (request, response, next) => {
    const id = request.params.id
    const sql = `SELECT * FROM personne WHERE num = ?`
    connection.query(sql, id, (error, result) => {
        if(error) console.log(`Problème de récupération de données :${error}`);
            else {
            if (result.length == 0) {
                return response
                    .status(404)
                    .send({ 'message' : `Aucune personne avec l'identifiant ${id}`})
            }
                return response
                    .status(200)
                    .json(result[0])
        }
    })
}



export const save = (req, res, next) => {
    const p = req.body
    personnes.push(p)
    return res
        .status(201)
        .json(p)
}

export const remove = (req, res, next) => {
    const indice = personnes.findIndex(elt => elt.id == req.params.id)
    if (indice == -1) {
        return res
            .status(404)
            .send({'message' : `Aucune personne avec l'identifiant ${req.params.id}` })
    }
     personnes.splice(indice, 1) //slice supprime beaucoup de choses dans un tableau
        return res
            .status(204)
            .send()
}

export const update = (req, res, next) => {
    if (req.body.id != req.params.id){
        return res
            .status(400)
            .send()
    }
    const indice = personne.findIndex(elt => elt.id == req.params.id)
    if (indice == -1) {
        return res
            .status(404)
            .send({'message' : `Aucune personne avec l'identifiant ${req.params.id}` })

    }
    personnes[indice] = req.body
    return res
        .status(202)
        .send(req.body)

}

//export { findAll }
