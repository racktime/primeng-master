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
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var portletTest_1 = require("./portletTest");
var portletTest2_1 = require("./portletTest2");
var pubSub_1 = require("./pubSub");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var PortletContainer = (function () {
    //@ViewChild('myname') input;????
    function PortletContainer(pubSub, injector, loader, http) {
        this.pubSub = pubSub;
        this.injector = injector;
        this.loader = loader;
        this.http = http;
        //this.service();
        //this.loader.loadAsRoot(PortletTest, '#dynamicid_1', null);
        //this.loader.loadAsRoot(PortletTest2, '#dynamicid_2', null);
        //this.portletService.search();
        //this.pList = this.pubSub.todos$;
        console.log('c-1');
    }
    PortletContainer.prototype.ngOnInit = function () {
        var _this = this;
        console.log('c-2');
        this.pubSub.todos$.subscribe(function (data) {
            console.log('c-3');
            _this.pList = Observable_1.Observable.create(function (o) {
                console.log('c-4');
                o.next(data);
                o.complete();
                _this.shapeshift();
            });
            _this.pList.subscribe(function () {
                console.log('c-5');
                _this.shapeshift();
            });
        });
    };
    //화면 활성화 후.
    PortletContainer.prototype.ngAfterViewInit = function () {
        //this.shapeshift();
        /*
            this.loadComponentConfig("./showcase/portlet/data.json")
                .then(components => Promise.all(components.map(p => this.loader.loadAsRoot(p, '#p_container', this.injector)))).then(() => this.shapeshift());
                */
        console.log("PortletContainer ngAfterViewInit");
        //this.elementRef.nativeElement.appendChild(p1);
        //elem.querySelector('div').appendChild(h3);
        //this.loader.loadAsRoot(PortletTest, '#p_main', null);
        //this.loader.loadAsRoot(PortletTest2, '#p_main', null);
    };
    //ngAfterViewChecked() 
    PortletContainer.prototype.createAll = function () {
        console.log("Got response from API", this.pList);
        //this.shapeshift();
    };
    //추가 버튼 후 추가.
    PortletContainer.prototype.add = function (p) {
        console.log(p);
    };
    PortletContainer.prototype.shapeshift = function () {
        $(document).ready(function () {
            console.log('c-shapeshift');
            $(".ep-main").shapeshift({
                //align : 'left',
                animateOnInit: true,
                gutterX: 5,
                gutterY: 5
            }).off("ss-drop-complete").on("ss-drop-complete", function () {
                //끝난 후 업데이트.
            });
        });
    };
    PortletContainer.prototype.loadComponentConfig = function (url) {
        var _this = this;
        return fetch(url).then(function (res) { return res.json(); }).then(function (componentList) {
            return Promise.all(componentList.map(function (config) { return _this.loadComponent(config); }));
        });
    };
    PortletContainer.prototype.loadComponent = function (configObject) {
        return System.import(configObject.path).then(function (componentModule) { return componentModule[configObject.component]; });
    };
    //개인정보 호출.
    PortletContainer.prototype.service = function () {
        var _this = this;
        this.http.get("./showcase/portlet/data.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.pList = data; }, function (err) { return console.log("ERROR!!!"); }, function () {
            _this.createAll();
        });
    };
    PortletContainer = __decorate([
        core_1.Component({
            selector: "p-container",
            //host: {
            //'style': 'display: table; height: 100%',
            //'class': 'ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable'
            //},
            templateUrl: "./showcase/portlet/portletContainer.html",
            //template: `<div id='p_container' class="ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable" style="height: 600px;"></div>`
            directives: [portletTest_1.PortletTest, portletTest2_1.PortletTest2]
        }), 
        __metadata('design:paramtypes', [pubSub_1.PubSub, core_1.Injector, core_1.DynamicComponentLoader, http_1.Http])
    ], PortletContainer);
    return PortletContainer;
}());
exports.PortletContainer = PortletContainer;
//# sourceMappingURL=portletContainer.js.map