'use strict'

//import { ProbaKlasa, DerivedProba, StaticClass } from './app';
import * as mojModul from './app';
//import { Observable } from 'rxjs';
import * as RxJs from 'rxjs';

RxJs.Observable.of(1,2,3).subscribe(
    x=>console.log(x)
);