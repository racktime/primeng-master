import {Component, forwardRef, ElementRef, ViewChild, OnInit, Injectable, Inject} from 'angular2/core';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "angular2/http";

import {Pop1} from "./pop/pop1";
import {PortletContainer} from "./portlet/portletContainer";
import {PubSub} from "./portlet/pubSub";

import {Sample} from "./sample/sample";
import {Jsonp} from "./sample/jsonp";
import {WikipediaService} from "./sample/wikipediaService";

//import {PortletTest} from "./portlet/portletTest";
//import {PortletTest2} from "./portlet/portletTest2";

@Component({
    selector: 'test',
    providers: [PortletContainer, PubSub, WikipediaService, HTTP_PROVIDERS, JSONP_PROVIDERS],
    templateUrl: 'showcase/test.html',
    directives: [PortletContainer, Pop1, Sample, Jsonp]
})

export class HomePageComponent{
    @ViewChild('pop1')
    pop1: Pop1;
    
    constructor(public portletContainer: PortletContainer) {
        //this.elementRef = elementRef;
        //this.loader = loader;
        //$('.ep-main').shapeshift({ animateOnInit: true, gutterX: 5, gutterY: 5 }).off('ss-drop-complete').on('ss-drop-complete', function () { });    
    }
    ngAfterViewInit() {
        //console.log('test ngAfterViewInit');

    }
    ngAfterContentChecked() {
    }

    ngAfterViewChecked() {
    }
    //addPortletListener Ãß°¡.
    addEvent(p:any) {
        this.portletContainer.add(p);
    }
}