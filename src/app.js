System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProbaKlasa, DerivedProba, StaticClass, GenericClass, MyClass;
    return {
        setters: [],
        execute: function () {
            ProbaKlasa = class ProbaKlasa {
                constructor() {
                    console.log('ProbaKlasa constructor...');
                }
                getProbaText() {
                    return "getProbaText";
                }
            };
            exports_1("ProbaKlasa", ProbaKlasa);
            DerivedProba = class DerivedProba extends ProbaKlasa {
                constructor() {
                    super();
                    console.log('DerivedProba constructor...');
                }
                getProbaText() {
                    super.getProbaText();
                    return "getDerivedProbaText2";
                }
            };
            exports_1("DerivedProba", DerivedProba);
            StaticClass = class StaticClass {
                getCounter() {
                    return StaticClass.counter;
                }
                incrementCounter(increment = 1) {
                    StaticClass.counter += increment;
                }
                decrementCounter(decrement = 1) {
                    StaticClass.counter -= decrement;
                }
            };
            StaticClass.counter = 0;
            exports_1("StaticClass", StaticClass);
            GenericClass = class GenericClass {
            };
            exports_1("GenericClass", GenericClass);
            MyClass = class MyClass {
                constructor() {
                    console.log("...MyClass constructor...");
                }
            };
            exports_1("default", MyClass);
            /*
            let gcObj=new GenericClass<number>();
            gcObj.param1=5;
            gcObj.addition=function(x,y){
                return x+y;
            }
            console.log("From generc class: "+gcObj.addition(gcObj.param1, 10));
            
            let x=[0,1,2];
            console.log("typeof : "+typeof(x));
            
            let genericAdditionFD: {<T>(x:T, y:T):T}=function<T>(x:T, y:T):T{
                return x+y;
            }
            
            export function genericAddition<T>(x:T, y:T):T{
                return x+y;
            }*/
        }
    };
});
