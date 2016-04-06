import {Component, Input, Inject} from 'angular2/core';

//binding tag ?
import {IPortlet} from "./IPortlet"


@Component({
    selector: 'p-1',
    host: {
        //'style': 'display: table; height: 100%',
        'class': 'type-box01 box-color1'
    },
    templateUrl: 'showcase/portlet/box1.html'

})


export class PortletTest implements IPortlet {
    @Input()
    title:string;
    constructor() {

    }

    setData():void {
    }
}