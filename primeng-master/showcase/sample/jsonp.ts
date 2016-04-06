import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {JSONP_PROVIDERS} from 'angular2/http';
import {WikipediaService} from './wikipediaService'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'sample-jsonp',
    template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input #term type="text" (keyup)="search(term.value)">
      <ul>
        <li *ngFor="#item of items">{{item}}</li>
      </ul>
    </div>
  `
})
export class Jsonp {
    items: Array<string>;
    constructor(private wikipediaService: WikipediaService) {
    }

    search(term) {
        this.wikipediaService.search(term).then(items => this.items = items);
    }
}