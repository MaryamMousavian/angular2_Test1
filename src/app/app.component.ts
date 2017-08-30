import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  template: '<h1> InLine Template!</h1>',
  styles: ['h1{color: red}']
})
export class AppComponent {
  title = 'app';
}
