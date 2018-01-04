export declare class ProbaKlasa {
    constructor();
    getProbaText(): string;
}
export declare class DerivedProba extends ProbaKlasa {
    constructor();
    getProbaText(): string;
}
export declare class StaticClass {
    static counter: number;
    getCounter(): number;
    incrementCounter(increment?: number): void;
    decrementCounter(decrement?: number): void;
}
export declare class GenericClass<T> {
    param1: T;
    addition: {
        (x: T, y: T): T;
    };
}
export default class MyClass {
    constructor();
}
