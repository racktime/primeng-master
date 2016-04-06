import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';
import {PortletTest} from "./portletTest";
import {PortletTest2} from "./portletTest2";

declare let io: any;
let url: string = 'http://localhost:3000/';

/// <reference path="browser/ambient/socket.io-client/index.d.ts" />
@Injectable()
export class PortletService {

    socket: any;
    username:any='testUser';
    constructor(private jsonp: Jsonp) {
  
    }

    createSocket(listener:any, scope:any) {
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
    }
    
    result(request): any {
        return ["asfd", "qwerqwer"];
    }

    search(): any {
        var search = new URLSearchParams();
        //search.set('action', 'opensearch');
        //search.set('search', term);
        //search.set('format', 'json');
        //return this.jsonp.get('./showcase/portlet/data.json', { search}).map((request) => request.json()[1]);

   
        let url = './showcase/portlet/data.json';            
        return this.jsonp
            .get(url, {})
            .map(request => this.result(request));
    }

    

    
}




