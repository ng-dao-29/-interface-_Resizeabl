import {Shape} from "./shaple";
import {Resizeable} from "./IResizeable";

export class Circle extends Shape implements Resizeable{
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    show(): string {
        return super.show();
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
    resize(percent: number):string {
        let newS = (this.calculateArea()/100)*(100 + percent);
        return `diện tích circle đã đc thay đổi thành :${newS}`
    }
    resizePerimeter(percent: number):string {
        let newC = (this.calculatePerimeter() / 100) * (100 + percent);
        return `chu vi circle đã đc thay đổi thành :${newC}`
    }
}