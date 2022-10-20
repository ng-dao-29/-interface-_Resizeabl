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
exports.Rectangle = void 0;
var shaple_1 = require("./shaple");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height, name) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.show = function () {
        return _super.prototype.show.call(this);
    };
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (this.width + this.height) * 2;
    };
    Rectangle.prototype.resize = function (percent) {
        var newS = (this.calculateArea() / 100) * (100 + percent);
        return "di\u1EC7n t\u00EDch rectangle \u0111\u00E3 \u0111c thay \u0111\u1ED5i th\u00E0nh :".concat(newS);
    };
    Rectangle.prototype.resizePerimeter = function (percent) {
        var newC = (this.calculatePerimeter() / 100) * (100 + percent);
        return "chu vi rectangle \u0111c thay \u0111\u1ED5i th\u00E0nh: ".concat(newC);
    };
    return Rectangle;
}(shaple_1.Shape));
exports.Rectangle = Rectangle;
