import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styles: [
        `
        li>a.active{color:#F97924;}
        `
    ]
})
export class NavComponent {
    constructor(public auth: AuthService) { }
}
