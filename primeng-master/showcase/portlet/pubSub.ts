import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';
import {PortletTest} from "./portletTest";
import {PortletTest2} from "./portletTest2";

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import "rxjs/Rx";

declare let io:any;
let _url = 'http://localhost:3002/';

/// <reference path="browser/ambient/socket.io-client/index.d.ts" />
@Injectable()
export class PubSub {
    todos$: Observable<string[]>;
    todosObserver: Observer<string[]>;
    dataStore: any;
    socket: any;
    username: any = 'testUser';
    //complete:any;
    constructor(private jsonp: Jsonp) {
        this.todos$ = new Observable(observer => this.todosObserver = observer).share();
        this.dataStore = { todos: ["1", "2", "78", "00"] };

        this.setSocket(function (data, scope) {
            scope.dataStore.todos.push(data.message);
            scope.todosObserver.next(scope.dataStore.todos);
            console.log('p-1');
        }, this);

        //?
    }

    ngOnInit() {
       console.log('p-2');
    }

    setSocket(listener:any, scope:any) {
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
    }

}




