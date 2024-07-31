import { writeFile, appendFile, readFile, appendFileSync } from 'node:fs'

const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]

// Otras pruebas: 
// writeFile("writefile.txt", "mañana no lo se", (err) => {
//     if (err) throw err;
//     console.log("saved!");
// })

// appendFile('writefile.txt', '\nespero que funcione', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// readFile('writefile.txt', function (err, data) {
//     if (err) throw err;
//     console.log(data.toString());
//   });

// writeFile("loopFile.txt", "Info:", (err) => {
//     if (err) throw err;
//     console.log("saved!");
// })

dias.forEach(dia => {
    appendFileSync('loopFile.txt', `\n${dia}`, (err) => {
        if (err) throw err;
        console.log(dia);
    })
})

