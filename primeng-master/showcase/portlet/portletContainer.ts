import {Component, Pipe, forwardRef, Injector, DynamicComponentLoader, Inject, Injectable} from "angular2/core";
import {Http} from "angular2/http";

import {PortletTest} from "./portletTest";
import {PortletTest2} from "./portletTest2";
import {PubSub} from "./pubSub";

import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

//binding tag ?
declare let System:any;
declare let fetch: any;

@Component({
    selector: "p-container",
    //host: {
    //'style': 'display: table; height: 100%',
    //'class': 'ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable'

    //},
    templateUrl: "./showcase/portlet/portletContainer.html",
    //template: `<div id='p_container' class="ep-main shapeshifted_container_q1neu6wn42pincex9a4i ui-droppable" style="height: 600px;"></div>`
    directives: [PortletTest, PortletTest2]
})

/// <reference path="browser/ambient/jquery/index.d.ts" />
export class PortletContainer {
    //? 동기화 처리 관건
    //pList: Array<any> = ["asdfa", "asdfasdf", "asdfasdf", "asdfasdf"];
    //pList: Observable<Array<any>>;
    pList: Observable<string[]>;
    socket: any;

    //@ViewChild('myname') input;????
    constructor(public pubSub: PubSub, public injector: Injector, public loader: DynamicComponentLoader, public http: Http) {
        //this.service();
        //this.loader.loadAsRoot(PortletTest, '#dynamicid_1', null);
        //this.loader.loadAsRoot(PortletTest2, '#dynamicid_2', null);
        //this.portletService.search();
        //this.pList = this.pubSub.todos$;
        console.log('c-1');

    }

    ngOnInit() {
        console.log('c-2');
        this.pubSub.todos$.subscribe(
            data => {
                console.log('c-3');
                this.pList = Observable.create((o) => {
                    console.log('c-4');
                    o.next(data);
                    o.complete();
                    this.shapeshift();
                });

                this.pList.subscribe(() => {
                    console.log('c-5');
                    this.shapeshift();
                });
            }
        );

    }

    //화면 활성화 후.
    ngAfterViewInit() {

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

    }

    //ngAfterViewChecked() 
    createAll() {
        console.log("Got response from API", this.pList);
        //this.shapeshift();
    }

    //추가 버튼 후 추가.
    add(p: any) {
        console.log(p);
    }

    shapeshift() {

        $(document).ready(function () { /* code here */
            console.log('c-shapeshift');
            $(".ep-main").shapeshift({
                //align : 'left',
                animateOnInit: true,
                gutterX: 5,
                gutterY: 5
            }).off("ss-drop-complete").on("ss-drop-complete", function() {
                //끝난 후 업데이트.
            });
        });
    }


    loadComponentConfig(url) {
        return fetch(url).then(res => res.json()).then(componentList =>
            Promise.all(componentList.map(config => this.loadComponent(config)))
        );
    }

    loadComponent(configObject) {
        return System.import(configObject.path).then(componentModule => componentModule[configObject.component]);
    }

    //개인정보 호출.
    service() {
        this.http.get("./showcase/portlet/data.json")
            // Call map on the response observable to get the parsed object
            .map(
                res => res.json()
            )
            // Subscribe to the observable to get the parsed object and attach it to the
            .subscribe(
                data => this.pList = data,
                err => console.log("ERROR!!!"),
                () => {
                    this.createAll();
                }
            );

    }
}