import {Component, Inject} from 'angular2/core';

import {IPortlet} from "./IPortlet"

@Component({
    selector: 'p-2',
    host: {
        'class': 'type-box02 box-color10',
        'data-ss-colspan':'2'
    },
    templateUrl: 'showcase/portlet/box2.html'
})

export class PortletTest2 implements IPortlet {
    constructor() {
        
    }

    setData():void {
    }
}