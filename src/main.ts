/// <reference path="./app.d.ts"/>

'use strict'

//import { ProbaKlasa, DerivedProba, StaticClass } from './app';
import * as mojModul from './app';
/*
let mojaKlasa=new ProbaKlasa();
let derProba=new DerivedProba();
*/
let mojaKlasa=new mojModul.ProbaKlasa();
let derProba=new mojModul.DerivedProba();

console.log(derProba.getProbaText());

let prom1=5;

function addition(x:number, y:number):number{
    return x+y+prom1;
}

/*import majKlasa from "./app";
let mK=new majKlasa();*/
let mk=new mojModul.default();

console.log(addition(3,2));