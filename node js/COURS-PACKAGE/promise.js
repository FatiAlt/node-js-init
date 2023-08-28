import fs from "node:fs/promises";
import fsSync from "fs";
import { error } from "node:console";

/** READ = La Lecture */
// fs.readFile('./salutation.txt')
//     .then(res => console.log(res.toString()))
//     .catch(err => console.log('Erreur:', err))
//     .finally(() => console.log('Fin de la promesse'))  //Dans la Promisse
// console.log('Fin de programme');                       //Hors de la Promisse
/** WRITE = L'Ecriture */

// fs.appendFile('./document3.txt', 'Fatima')
//     .then(() => console.log("Ecriture effectuée avec succès"))
//     .catch((err)=> console.log("Erreur :", err))
//     .finally(() => console.log("Fin de promesse"))
// console.log('Fin de programme');

// fs.readFile('./salutation.txt')
//     .then(content => {
//         fs.writeFile('./salutation-copy-promise.txt', content)
//             .then(() => console.log("Opération effectuée avec succès"))
//             .catch((err) => console.log("Problème d'écriture :", err))
//             .finally(() => console.log("Fin d'écriture"))
//     })
//     .catch(error => console.log("Problème de lecture :", error))
//     .finally(() => console.log("Fin de lecture"))

// voici une autre solution avec await

// let content = ''
// const copy = async () => {
//     if (fsSync.existsSync('./salutation.txt')) {
//         await fs.readFile('./salutation.txt').then(res => content = res)
//         await fs.writeFile('./salutation-copy-promise-2.txt', content)
//     }
// }
// copy().then(() => console.log("Opération effectuée avec succès"))

// const filename = './document3.txt'
// fs.unlink(filename)
//     .then(() => console.log ("Opération effectuée avec succès"))
//     .catch((error) => console.log("Problème de suppression :", error))
//     .finally(() => console.log("Fin de l'opération"))

// console.log('Fin de promesse')

//     .catch(err => console.log('Erreur:', err))
//     .finally(() => console.log('Fin de la promesse'))

// fs.mkdir('f/g', { recursive: true})
//     .then(() => console.log("répertoires crées avec succès"))
//     .catch(err => console.log("Problème de création de répertoire", err))

// fs.mkdir("d1")
//   .then(() => console.log("dossier crée avec succès"))
//   .catch((error) => console.log("Problème de création de dossier")); //création de dossier

// fs.mkdir("d2")
//   .then(() => console.log("Dossier ok"))
//   .catch((error) => console.log("Erreur dossier"));

// fs.readFile("./f1.txt")
//   .then((content) => {
//     fs.writeFile("d2/f1-copy-promise.txt", content)
//       .then(() => console.log("copie effectuée avec succès"))
//       .catch((err) => console.log("Problème de copie :", err))
//       .finally(() => console.log("Fin de copie"));
//   })
//   .catch((error) => console.log("Problème de lecture :", error))
//   .finally(() => console.log("Fin de lecture"));


