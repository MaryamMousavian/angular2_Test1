import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  template: '<h1> Root Component!</h1>' +
  '<app-lifecycle *ngIf="!delete" [bindable]="boundValue">' +
  '<p>{{test}}</p></app-lifecycle>' +
  '<button (click)="delete = true">click to delete</button>' +
  '<button (click)="test=false">click to change content</button>' +
  '<button (click)="boundValue= boundValue + 1;">click to change binding</button>'
})
export class AppComponent {
  title = 'app';
  delete = false;
  test = 'starting value!';
  boundValue = 1000;
}
