import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
      <div>My Items</div>
      <ng-content select=".item"></ng-content>
    `
})

export class MyComponent {}

@Component({
    selector: 'sample',
    template: `
    <my-component>
      <template ngFor #item [ngForOf]="items" class="item">
        {{item}}
      </template>
      <div>test</div>
    </my-component>
    `,
    directives: [MyComponent]
})

export class Sample {
    items : Array<any>;
    constructor() {
        this.items = ["Item1", "Item2", "Item3"];
    }

}