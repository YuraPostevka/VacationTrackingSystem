import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[id=admin-bar]',
    template: `
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Vacation Tracking</a>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left">
                <li><a routerLink="/calendar">Calendar</a></li>
                <li><a routerLink="/policy">Policy</a></li>
                <li><a routerLink="/users">Users</a></li>
                <li class="navbar-form navbar-left">
                    <div class="form-group">
                        <button type="button" routerLink="/vacation" class="btn btn-info" id="book_time_off_btn">New Vacation Request</button>
                    </div>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li role="presentation" *ngIf="!isSigned" routerLinkActive="active"><a routerLink="/signin" >Sign In</a></li>
                <li role="presentation" *ngIf="isSigned" routerLinkActive="active"><a>Log out</a></li>
            </ul>
        </div>
`,
    styles: [`

.navbar {
    margin-bottom: 20px;
}
#book_time_off_btn{
    background-color:#5584ff;
}

`]
})
export class AdminBarComponent {
    constructor(private router: Router) {

        this.checkIfSignedIn();
    }

    isSigned: boolean;

    checkIfSignedIn() {
        if (localStorage.getItem("token") === "" || localStorage.getItem('token') === null) {
            this.isSigned = false;
            window.location.href = "http://localhost:54132/#/signin";
        }
    }

    public Login() {
        this.router.navigate(['/signin']);
    }

    public Logout() {
        this.router.navigate(['/signin']);
    }
}