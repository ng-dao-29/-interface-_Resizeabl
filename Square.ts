import {Rectangle} from "./Rectangle";
import {Resizeable} from "./IResizeable";

export class Square extends Rectangle {
    constructor(name: string,
                width: number,
                height:number) {
        super(width,height, name);
    }
}

let spuare = new Square("spuare",10,5);
console.log(spuare.show())
console.log(spuare.resize(10))