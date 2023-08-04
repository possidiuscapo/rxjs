`use strict`

const { fromEvent } = require('rxjs');
const { Observable , of} = require('rxjs');

// import { fromEvent } from "rxjs";
// import { Observable } from "rxjs/internal/Observable";


// const btn = document.querySelector('button')

// btn.addEventListener('click', () => console.log('Button clické'))

// fromEvent(btn, 'click').subscribe(() => console.log('Button cliqué'))


let monObserver = {
    next: (x) => console.log('Une valeur reçu: ' + x), //s'exécute si  chaque fois que le serveur retourn une valeur
    error: (err) => console.error("Une erreur s'est produite: " + err), //s'exécute si une erreur advient
    complete: () => console.log("L'observer a reçu une modification de complétion") //s'exécute quand on récupérer toutes les valeurs
}

// let monObservable = new Observable((observer) => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.next(4);
// })

// monObservable.subscribe((x)=> {
//     console.log("Une valeur reçu: ",+ x)
// })


let obs = of(1,2,3,4);

obs.subscribe((x)=> {
    console.log("Une valeur reçu: ",+ x)
})