import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { User } from './user.model';

import { AppService } from '../app/app.service';

@Component({
    templateUrl: '../app/components/account/signin.component.html',
    styleUrls: ['../app/components/account/signin.component.css']
})

export class SigninComponent {
    user: User = new User();

    token: string;
    constructor(private service: AppService, private router: Router) {

    }
    SignIn() {
        this.service.getToken(this.user).subscribe(
            data => { this.router.navigate(["/calendar"]); localStorage.setItem("token", data.access_token) },
            error => console.log(error));

    }
}