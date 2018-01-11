'use strict'
import { Subject } from 'rxjs/Rx';
import { queue } from 'rxjs/scheduler/queue';

//import { ProbaKlasa, DerivedProba, StaticClass } from './app';
import * as mojModul from './app';
//import { Observable } from 'rxjs';
import * as RxJs from 'rxjs';

/*RxJs.Observable.of(1,2,3).subscribe(
    x=>console.log(x),
    error=>console.log(error),
    ()=>console.log("Completed...")
);


RxJs.Observable.create((observer)=>{
    observer.next("Neka vrednost");
    setTimeout(function() {
        observer.complete();
    }, (1500));
}).map((data)=>{
    console.log("Data :" + data)
    return data + "transform";
}).
subscribe(
    x=>console.log(x),
    error=>console.log(error),
    ()=>console.log("Completed...")
);*/

let observable = RxJs.Observable.interval(2000);
let observer = {
    next: (value)=>{
        console.log(value);
    },
    error: (greskaKod)=>{
        console.log(greskaKod);
    }
};
observable
.map((data)=>{
        console.log("From map: "+ data);
        return data;
    }
)
/*.filter((value)=>{
    if((value%2)==0) return true
})*/
.subscribe(observer);

/*let subject=new RxJs.Subject();
subject.subscribe(observer);
subject.next('Neka vrednost');
subject.error('Neka greska');*/

