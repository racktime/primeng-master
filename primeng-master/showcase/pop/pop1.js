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
var dialog_1 = require("../../components/dialog/dialog");
var button_1 = require("../../components/button/button");
var Pop1 = (function () {
    function Pop1() {
        this.display = false;
        //output �̺�Ʈ ���� ����.
        this.addEvent = new core_1.EventEmitter();
    }
    Pop1.prototype.add = function () {
        this.addEvent.emit('event');
    };
    Pop1.prototype.show = function () {
        console.log('pop1 show');
        this.display = true;
    };
    Pop1.prototype.hide = function () {
        this.display = false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Pop1.prototype, "addEvent", void 0);
    Pop1 = __decorate([
        core_1.Component({
            selector: 'pop1',
            templateUrl: 'showcase/pop/pop1.html',
            directives: [dialog_1.Dialog, button_1.Button]
        }), 
        __metadata('design:paramtypes', [])
    ], Pop1);
    return Pop1;
}());
exports.Pop1 = Pop1;
//# sourceMappingURL=pop1.js.map