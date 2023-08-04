`use strict`
import { fromEvent, interval, take } from "rxjs";
import { map, mergeMap, pgcd } from "rxjs/operators";

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const resultSpan = document.querySelector('p span');

const ob1 = fromEvent(num1Input, 'input').pipe(
    map((event) => parseInt(event.target.value))
);
const ob2 = fromEvent(num2Input, 'input').pipe(
    map((event) => parseInt(event.target.value))
);
ob1.subscribe(val => console.log(val));

ob1.pipe(
    mergeMap(num1 => ob2.pipe(map(num2=> pgcd(num1,num2))))
).subscribe(pgcd)


const pgcd = (a, b) =>{
    while (b!==0){
        let temp =b;
        b= a%b;
        a = temp;
    }
    return a
}

interval(1000).pipe(take(10)).subscribe(x=>console.log(x))