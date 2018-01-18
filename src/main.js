System.register(["rxjs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RxJs, observable, observer;
    return {
        setters: [
            function (RxJs_1) {
                RxJs = RxJs_1;
            }
        ],
        execute: function () {
            console.log("main.js");
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
            observable = RxJs.Observable.interval(2000);
            observer = {
                next: (value) => {
                    console.log(value);
                },
                error: (greskaKod) => {
                    console.log(greskaKod);
                }
            };
            observable
                .map((data) => {
                console.log("From map: " + data);
                return data;
            })
                .subscribe(observer);
            /*let subject=new RxJs.Subject();
            subject.subscribe(observer);
            subject.next('Neka vrednost');
            subject.error('Neka greska');*/
        }
    };
});
