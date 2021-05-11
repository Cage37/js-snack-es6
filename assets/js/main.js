// Snack 1:
// Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bycicle = [
    {
        bycicleName: "Mountain bike",
        bycicleWeight: 600
    },
    {
        bycicleName: "City bike",
        bycicleWeight: 700
    },
    {
        bycicleName: "BMX",
        bycicleWeight: 400
    }
];

// var minWeightBycicle = "";

// for (let i = 0; i < bycicle.length; i++) {
//     if (minWeightBycicle == "") {
//         minWeightBycicle = bycicle[i];
//     } else if (minWeightBycicle.bycicleWeight > bycicle[i].bycicleWeight) {
//         minWeightBycicle = bycicle[i];
//     }
// }

// console.log(minWeightBycicle);

const [ , , bycicleThree] = bycicle;
const {bycicleName, bycicleWeight} = bycicleThree;
console.log(bycicleThree);

document.getElementById("bycicle").innerHTML = `LA BICICLETTA CHE PESA MENO E': ${bycicleName} e pesa ${bycicleWeight}.`;



// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// nome, punti fatti e falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const team = [
    {   
        teamName: "Inter",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {   
        teamName: "Milan",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {   
        teamName: "Juventus",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {   
        teamName: "Roma",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {   
        teamName: "Lazio",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {   
        teamName: "Napoli",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {   
        teamName: "Atalanta",
        pointsMade: 0,
        foulsSuffered: 0
    }
];

const newTeams = [];

for (let i = 0; i < team.length; i++) {
    team[i].pointsMade = Math.floor(Math.random() * 101);
    team[i].foulsSuffered = Math.floor(Math.random() * 501);
    const {teamName, foulsSuffered} = team[i];
    const newTeam = {
        teamName,
        foulsSuffered
    }
    newTeams.push(newTeam);
};

console.log(newTeams);

