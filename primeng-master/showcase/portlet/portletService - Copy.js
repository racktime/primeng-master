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
var http_1 = require('angular2/http');
var url = 'http://localhost:3000/';
/// <reference path="browser/ambient/socket.io-client/index.d.ts" />
var PortletService = (function () {
    function PortletService(jsonp) {
        this.jsonp = jsonp;
        this.username = 'testUser';
    }
    PortletService.prototype.createSocket = function (listener, scope) {
        this.socket = io(url);
        this.socket.on('connect', function () {
            //첫번째 호출?
            //this.socket.emit('add user', this.username);
        });
        this.socket.on('new message', function (data) {
            console.log(data);
            data = ["asdfa", "asdfasdf", "asdfasdf", "asdfasdf"];
            listener(data, scope);
        });
        this.socket.on('disconnect', function () {
        });
    };
    PortletService.prototype.result = function (request) {
        return ["asfd", "qwerqwer"];
    };
    PortletService.prototype.search = function () {
        var _this = this;
        var search = new http_1.URLSearchParams();
        //search.set('action', 'opensearch');
        //search.set('search', term);
        //search.set('format', 'json');
        //return this.jsonp.get('./showcase/portlet/data.json', { search}).map((request) => request.json()[1]);
        var url = './showcase/portlet/data.json';
        return this.jsonp
            .get(url, {})
            .map(function (request) { return _this.result(request); });
    };
    PortletService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], PortletService);
    return PortletService;
}());
exports.PortletService = PortletService;
//# sourceMappingURL=portletService - Copy.js.map