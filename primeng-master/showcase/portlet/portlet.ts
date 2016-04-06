import {Component, Inject} from 'angular2/core';

//binding tag ?
import {IPortlet} from "./IPortlet"


@Component({
    selector: 'p-render',
    templateUrl: 'showcase/portlet/box1.html'
})


export class Portlet implements IPortlet {
    constructor() {
    }
    setData():void {
    }

    

}