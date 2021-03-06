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
const user_model_1 = require("./user.model");
const app_service_1 = require("../app/app.service");
let SigninComponent = class SigninComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.user = new user_model_1.User();
    }
    SignIn() {
        this.service.getToken(this.user).subscribe(data => { this.router.navigate(["/calendar"]); localStorage.setItem("token", data.access_token); }, error => console.log(error));
    }
};
SigninComponent = __decorate([
    core_1.Component({
        templateUrl: '../app/components/account/signin.component.html',
        styleUrls: ['../app/components/account/signin.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map