const { Subject, interval } = require('rxjs');

// deuxième exemple broadcast 
/**
 * Methode créant un Observable qui renvoi périodiquement 
 * et continuellement flux 
 * d'entier naturels ( 0, 1, 2)
 */

let source = interval(100); // Observable creation d'un Observable periodiquement
let subject = new Subject(); // Subject : creation de subject

// on s'abonne à l'Observable source en lui passant un Observer qui 
// est précisément le subject
let subSource = source.subscribe(subject); // Subject ~ Observer
/**
 * on connecte le sujet à l"observable "sources"
 * et donc, chaque valeur émise par "numbers" sera reçu 
 * par "subject" et transmis aux abonnés
 */
// Subject ~ Observable : multicast
// ces derniers Observables vont recevoir les informations
let subject1 = subject.subscribe(
    (num) => { console.log(`Observer #1 ${num}`); },
    (e) => { console.log('error'); },
    () => { console.log('completed #1'); });

let subject2 = subject.subscribe(
    (num) => { console.log(`Observer #2 ${num}`); },
    (e) => { console.log('onError: ' + e.message); },
    () => { console.log('completed #2'); });

let subject3 = subject.subscribe(
    (num) => { console.log(`Observer #2 ${num}`); },
    (e) => { console.log('onError: ' + e.message); },
    () => { console.log('completed #2'); });


// au bout de 5 secondes 
const inter = setInterval(() => {
    subject.complete(); // exécute la méthode complete 
    subject1.unsubscribe(); // subject 1 se désabonné
    subject2.unsubscribe(); // subject 2 se désabonné
    subject3.unsubscribe(); // subject 3 se désabonné

    subSource.unsubscribe();

    clearInterval(inter);

}, 5000);
