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
var PortletTest2 = (function () {
    function PortletTest2() {
    }
    PortletTest2.prototype.setData = function () {
    };
    PortletTest2 = __decorate([
        core_1.Component({
            selector: 'p-2',
            host: {
                'class': 'type-box02 box-color10',
                'data-ss-colspan': '2'
            },
            templateUrl: 'showcase/portlet/box2.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PortletTest2);
    return PortletTest2;
}());
exports.PortletTest2 = PortletTest2;
//# sourceMappingURL=portletTest2.js.map