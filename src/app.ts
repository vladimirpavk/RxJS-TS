export class ProbaKlasa{
    constructor(){
        console.log('ProbaKlasa constructor...');
    }

    public getProbaText():string{
        return "getProbaText";
    }
}

export class DerivedProba extends ProbaKlasa{
    constructor(){
        super();
        console.log('DerivedProba constructor...');
    }

    public getProbaText():string{
        super.getProbaText();
        return "getDerivedProbaText2";
    }
}

export class StaticClass{
    public static counter:number = 0;

    public getCounter():number{
        return StaticClass.counter;
    }

    public incrementCounter(increment:number = 1){
        StaticClass.counter+=increment;
    }

    public decrementCounter(decrement:number = 1){
        StaticClass.counter-=decrement;
    }
}

export class GenericClass<T>{
    public param1: T;
    //public addition: (x:T, y:T)=>T;
    public addition: {(x:T, y:T):T};
}

export default class MyClass{
    constructor(){
        console.log("...MyClass constructor...");
    }
}

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
