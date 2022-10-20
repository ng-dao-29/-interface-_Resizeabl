import {Shape} from "./shaple";
import {Resizeable} from "./IResizeable";

export class Rectangle extends Shape implements Resizeable{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }
    show(): string {
        return super.show();
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
    resize(percent: number) : string {
        let newS = (this.calculateArea()/100)*(100+percent)
        return `diện tích rectangle đã đc thay đổi thành :${newS}`
    }
    resizePerimeter(percent: number):string {
        let newC = (this.calculatePerimeter()/100)*(100+percent);
        return `chu vi rectangle đc thay đổi thành: ${newC}`
    }
}