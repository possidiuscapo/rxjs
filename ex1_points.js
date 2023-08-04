const { Observable, of, max } = require('rxjs');
// const {  } = require('rxjs/operators');

// liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// mapping data  TODO filtre
const maxP = source.pipe(
    max((a, b) => Math.sqrt(a.x ** 2 + b.y ** 2) < Math.sqrt(a.x ** 2 + b.y ** 2) ? -1 : 1)
);

// s'inscrire TODO et afficher les données
maxP.subscribe(valu => console.log("Le maximum est : ", valu ))