//const { produit, somme} = require('./fonction')

// import f from './fonction.js' // c'est une fonction qui est exporter par défault donc on peut n'importe quelle nom dans l'import. Mais on a droit qu'à une fonction default par fichier car sinon il ne s'est pas lequel choisir
// import {produit} from './fonction.js'

import('./fonction.js')
    .then(m => console.log(m.produit(2, 3)))
    .catch(() => console.error("Problème d'importation"))
    .finally(() => console.log("fin"))


// console.log(f(2, 3))
// console.log(produit(2, 3))

