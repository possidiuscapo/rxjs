`use strict`
// import { Observable } from 'rxjs';
const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

const products = {
    data: [
        { nom: "spaghetti", prix: 25000, qualité: "inferieure" },
        { nom: "tomate", prix: 1600, qualité: "superieure" },
        { nom: "oeuf", prix: 40000, qualité: "superieure" },
        { nom: "mayonnaise", prix: 9500, qualité: "inferieure" },
        { nom: "viande", prix: 60000, qualité: "inferieure" },
        { nom: "pain", prix: 3200, qualité: "inferieure" },
    ]
}

// const observable = new Observable((subscriber) => {
//     subscriber.next(products)
// }).pipe(
//     map((valeur)=>{
//     console.log('Reception de :' ,valeur)
// }))


const observable = new Observable((subscriber) => {
    subscriber.next(products)
}).pipe(
    map((valeur) => {
        console.log('dans le premier operateur =', valeur)
        return valeur.data
    }),
    map((valeur) => {
        console.log('dans le 2ème operateur :', valeur)
        return valeur.filter()
    }),
    map((valeur) => {
        console.log('dans le 3ème operateur :', valeur)
        return
    })
)