import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  template: '<h1> Root Component!</h1>' +
  '<app-lifecycle *ngIf="!delete"></app-lifecycle>' +
  '<button (click)="delete = true">click to delete</button>'
})
export class AppComponent {
  title = 'app';
  delete = false;
}
