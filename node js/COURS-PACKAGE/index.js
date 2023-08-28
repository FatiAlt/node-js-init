function somme(a, b){
    return a + b;
}

// function somme (a, b) {
//     return a + b;
// }

function produit(a, b) {
    return a * b;
}

function operation(x, y, z, fonction1, fonction2) {
    const resultat1 = fonction1(x, y)
    const resultat2 = fonction2 (resultat1, z)
    console.log(resultat2)
}

operation(2, 5, 3,  produit, somme) //(2*5)+3
operation(2, 5, 3, somme, produit) //(2+5)*3

function division (a,b) {
    if (b == 0) {
        throw "Division par zéro"
    }
    return a / b
}

// const division = (a, b, callback) => {
//     if (b != 0) {
//         return callback(null, a / b)
//     } else {
//         return callback("division par zéro", null)
//     }
// }

// const a = 10, b = 0
// division(a, b, (err, resultat) => {
//     if (err) {
//         console.log(`Erreur : ${err}`)
//     } else {
//         console.log(`${a}/${b}=${resultat}`)
//     }
// })

// // console.log(division(10, 2));
// // console.log(division(10, 0));

// // const division = async (a, b) => {
// //     if (b != 0)
// //         return a / b;
// //     throw "Division par zéro"
// // }
// // try {
// //     console.log(division(10, 2));
// //     console.log(division(10, 0));
// // } catch (e) {
// //     console.log(e)
// // }

// division(10, 2)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// division(10, 0)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// const affichage = async (a, b) => {
//     await division(a, b).then(res => console.log(res));
//     console.log("Fin");
// };

// affichage(10, 2)

// console.log("Fin");

var tab = [1, 3, 6, 8, 9];
var element = 5;

function exist(elt, tableau, callback) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] == elt) {
            return callback(null, i)
        }
    }
    // const indice = tableau.findIndex(value => value == elt)
    return callback(`${elt} n'est pas dans le tableau`, null)

}

exist(element, tab, (err, res) => {
    if (err) {
        console.log("Erreur :", err)
    } else {
        console.log(res)
    }
})
