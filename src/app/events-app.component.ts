import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `

})
export class EventsAppComponent {
  title = 'sample-app';
}
