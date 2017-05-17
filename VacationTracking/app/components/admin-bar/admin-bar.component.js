"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let AdminBarComponent = class AdminBarComponent {
    constructor(router) {
        this.router = router;
        this.checkIfSignedIn();
    }
    checkIfSignedIn() {
        if (localStorage.getItem("token") === "" || localStorage.getItem('token') === null) {
            this.isSigned = false;
            window.location.href = "http://localhost:54132/#/signin";
        }
    }
    Login() {
        this.router.navigate(['/signin']);
    }
    Logout() {
        this.router.navigate(['/signin']);
    }
};
AdminBarComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AdminBarComponent);
exports.AdminBarComponent = AdminBarComponent;
//# sourceMappingURL=admin-bar.component.js.map