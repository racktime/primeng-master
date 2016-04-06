import {Component, Directive, Input, Output, EventEmitter, Host, forwardRef, Injectable, Inject} from 'angular2/core';
import {Dialog} from "../../components/dialog/dialog";
import {Button} from "../../components/button/button";

@Component({
    selector : 'pop1',
    templateUrl: 'showcase/pop/pop1.html',
    directives: [Dialog, Button]
})

//@Injectable
export class Pop1 {
    display: boolean = false;

    //output 이벤트 전달 방식.
    @Output()
    addEvent = new EventEmitter();

    constructor() {
    }

    add() {
        this.addEvent.emit('event');
    }

    show() {
        console.log('pop1 show');
        this.display = true;
    }

    hide() {
        this.display = false;
    }
}