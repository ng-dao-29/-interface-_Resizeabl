"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Circle = void 0;
var shaple_1 = require("./shaple");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.show = function () {
        return _super.prototype.show.call(this);
    };
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return Math.PI * this.radius * 2;
    };
    Circle.prototype.resize = function (percent) {
        var newS = (this.calculateArea() / 100) * (100 + percent);
        return "di\u1EC7n t\u00EDch h\u00ECnh tr\u00F2n \u0111\u00E3 \u0111c thay \u0111\u1ED5i th\u00E0nh :".concat(newS);
    };
    Circle.prototype.resizePerimeter = function (percent) {
        var newC = (this.calculatePerimeter() / 100) * (100 + percent);
        return "chu vi h\u00ECnh tr\u00F2n \u0111\u00E3 \u0111c thay \u0111\u1ED5i th\u00E0nh :".concat(newC);
    };
    return Circle;
}(shaple_1.Shape));
exports.Circle = Circle;
var circle = new Circle("hình tròn", 10);
console.log(circle.show());
