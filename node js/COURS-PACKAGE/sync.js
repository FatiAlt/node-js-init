import fs from 'fs';

/** READ = La Lecture */
// const content = fs.readFileSync('./salutation.txt')
// fs.readFileSync
// console.log(content.toString()); //Sinon il affiche en form Hexadecimal
// console.log('Fin');

//fs.writeFileSync('./document.txt', 'Ivan')

//fs.appendFileSync('./salutation.txt','salutation-copy.txt')

// const contenu = fs.readFileSync('./salutation.txt')
// fs.writeFileSync('./salutation-copy-sync.txt', contenu)

// const filename = './document.txt'
// if (fs.existsSync(filename)) {
//     fs.unlinkSync('./document.txt') //pour supprimer le fichier
//     console.log(`${filename} supprimé avec succès`)
// } else {
//     console.log(`Erreur : ${filename} n'existe pas`)
// }

// fs.mkdirSync('a')
// fs.mkdirSync('b/c', { recursive: true })

fs.renameSync('f1', 'f2')
