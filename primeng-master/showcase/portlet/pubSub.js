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
var Observable_1 = require('rxjs/Observable');
require("rxjs/Rx");
var _url = 'http://localhost:3002/';
/// <reference path="browser/ambient/socket.io-client/index.d.ts" />
var PubSub = (function () {
    //complete:any;
    function PubSub(jsonp) {
        var _this = this;
        this.jsonp = jsonp;
        this.username = 'testUser';
        this.todos$ = new Observable_1.Observable(function (observer) { return _this.todosObserver = observer; }).share();
        this.dataStore = { todos: ["1", "2", "78", "00"] };
        this.setSocket(function (data, scope) {
            scope.dataStore.todos.push(data.message);
            scope.todosObserver.next(scope.dataStore.todos);
            console.log('p-1');
        }, this);
        //?
    }
    PubSub.prototype.ngOnInit = function () {
        console.log('p-2');
    };
    PubSub.prototype.setSocket = function (listener, scope) {
        this.socket = io(_url);
        this.socket.on('connect', function () {
            //this.socket.emit('add user', this.username);
            listener({}, scope);
        });
        this.socket.on('new message', function (d) {
            listener(d, scope);
        });
        this.socket.on('disconnect', function () {
        });
    };
    PubSub = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], PubSub);
    return PubSub;
}());
exports.PubSub = PubSub;
//# sourceMappingURL=pubSub.js.map