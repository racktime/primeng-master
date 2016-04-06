"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n      <div>My Items</div>\n      <ng-content select=\".item\"></ng-content>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
var Sample = (function () {
    function Sample() {
        this.items = ["Item1", "Item2", "Item3"];
    }
    Sample = __decorate([
        core_1.Component({
            selector: 'sample',
            template: "\n    <my-component>\n      <template ngFor #item [ngForOf]=\"items\" class=\"item\">\n        {{item}}\n      </template>\n      <div>test</div>\n    </my-component>\n    ",
            directives: [MyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Sample);
    return Sample;
}());
exports.Sample = Sample;
//# sourceMappingURL=sample.js.map