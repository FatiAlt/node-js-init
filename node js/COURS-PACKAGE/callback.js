import fs from 'fs';
import { rename } from 'fs';

/** READ = La Lecture */
// fs.readFile('./salutation.txt', (err, res) => {
//     if (err) {
//         console.log("Erreur :", err)
//     } else {
//         console.log(res.toString());
//     }
// })
// console.log('Fin');
/** WRITE = L'Ecriture */
// fs.appendFile('./document2.txt', '\nFatima', (err, res) => {

//     if(err) {
//         console.log("Erreur :", err)
//     } else {
//         console.log("Ecriture effectuée avec succès")
//     }
// })
// console.log('Fin');

//fs.appendFile('./document2.txt')

// fs.readFile('./salutation.txt', (err, content) => {
//     if (err) {
//         return console.log("Problème de lecture :", err)
//     }
//     fs.writeFile('./salutation-copy-callback.txt', content, (error, res) => {
//         if (error) {
//             return console.log("Problème d'écriture :", error);
//         }
//         console.log("Opération effectuée avec succès")
//     })

// })

// const filename = './document2.txt'
// fs.unlink(filename, (err, res) => {
//     if (err) {
//         console.log("Problème de suppression :", err)
//     } else {
//         console.log(`${filename} supprimé avec succès`);
//     }
// })

// const a = './a-callback.txt'
// fs.mkdir(a, (err, res) => {
//     if (err) {
//         console.log("Problème d'affichage :", err);
//     } else {
//         console.log("Affichée avec succès");
//     }
// }) correction :

// fs.mkdir('d/e', {recursive: true}, (err, res) => {
//     if (err) {
//         console.log("Problème de création de répertoire")
//     } else {
//         console.log('réperoire créé avec succès')
//     }
// })


// fs.writeFile('./f1.txt', 'bienvenue chez moi', (err, res) => {
//     if (err) {
//         console.log("Erreur fichier :", err)
//     } else {
//         console.log("Fichier crée avec succès")
//     }
// })

// console.log('Fin fichier'); //création de fichier

// fs.rename("f1.txt", "f2.txt", ()  => {
//     console.log("Changement crée avec succès")
// })

//Exercice:
//1- créer un dossier d1
//2- créer un fichier f1.txt avec un texte de votre choix dans d1
//3- copier f1.txt dans d2 (a créer)
//4- renommer f1 en f2


//correction
const dirname1 = 'd1'
const dirname2 = 'd2'
const filename1 = 'f1.txt'
const filename2 = 'f2.txt'
fs.mkdir(dirname1, (err1) => {
    if (err1) console.log(`Problème de création de ${dirname1}`)
    else {
        console.log(`${dirname1} créé avec succès`)
        fs.writeFile(`${dirname1}/${filename1}`, "Mercredi", (err2) => {
            if (err2) console.log("Problème de création de fichier")
            else {
                console.log(`${dirname1}/${filename1} créé avec succès`)
                fs.mkdir(dirname2, (err3) => {
                    if (err3) console.log(`Problème de création de ${dirname2}`)
                    else {
                        console.log(`${dirname2} créé avec succès`)
                        fs.copyFile(`${dirname1}/${filename1}`, `${dirname2}/${filename1}`, (err4) => {
                            if (err4) console.log("Problème de copie")
                            else {
                                console.log(`${dirname1}/${filename1} copié avec succès`)
                                fs.rename(`${dirname2}/${filename1}`, `${dirname2}/${filename2}`, (err5) => {
                                    if (err5) console.log("Impossible de renommer")
                                    else console.log(`${dirname2}/${filename1} renommé ${dirname2}/${filename2}`)
                                })
                            }
                        })
                    }
                })

            }
        })
    }
})
