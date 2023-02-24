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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.checkAC = function () {
        return 'AC is available';
    };
    Car.prototype.callFacility = function () {
        return 'Call facility is supported';
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 340000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return "Blue";
    };
    Toyota.prototype.GPSsupport = function () {
        return "Not supported";
    };
    return Toyota;
}(Car));
var Hyundyai = /** @class */ (function (_super) {
    __extends(Hyundyai, _super);
    function Hyundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hyundyai.prototype.Price = function () {
        return 2300000;
    };
    Hyundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hyundyai.prototype.Color = function () {
        return "Black";
    };
    Hyundyai.prototype.GPSsupport = function () {
        return "Supported";
    };
    return Hyundyai;
}(Car));
var objToyota = new Toyota();
var objHyundyai = new Hyundyai();
console.log("****************WELCOME TO SHOWROOM*****************\n");
console.log("\nFEATURES OF TOYOTA\n");
console.log("Car is \"".concat(objToyota.Wheel(), "\""));
console.log("Car \"".concat(objToyota.checkAC(), "\""));
console.log("In this \"".concat(objToyota.callFacility(), "\""));
console.log("Is GPS supported:=> \"".concat(objToyota.GPSsupport(), "\""));
console.log("Color of Toyota car is \"".concat(objToyota.Color(), "\""));
console.log("Price of Toyota car is \"".concat(objToyota.Price(), "\""));
console.log("Total seats of Toyota car is \"".concat(objToyota.getTotalSeats(), "\""));
console.log("---------------------------------------------------------------------");
console.log("\nFEATURES OF HYUNDYAI\n");
console.log("Car is \"".concat(objHyundyai.Wheel(), "\""));
console.log("Car \"".concat(objHyundyai.checkAC(), "\""));
console.log("In this \"".concat(objHyundyai.callFacility(), "\""));
console.log("Is GPS supported:=> \"".concat(objHyundyai.GPSsupport(), "\""));
console.log("Color of Hyundyai car is \"".concat(objHyundyai.Color(), "\""));
console.log("Price of Hyundyai car is \"".concat(objHyundyai.Price(), "\""));
console.log("Total seats of Hyundyai car is \"".concat(objHyundyai.getTotalSeats(), "\""));
