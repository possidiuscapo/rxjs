const { Subject } = require('rxjs');

let subject = new Subject();

// le subject est également un Observable
let subscription = subject.subscribe(
    {
        next: (n) => { console.log(`next : ${n}`); }, // next
        error: (e) => { console.log('error'); }, // error
        complete: () => { console.log('completed'); } // completed
    }
);

// le subject est un Observer 
subject.next(1);
subject.next(2);

subject.complete();