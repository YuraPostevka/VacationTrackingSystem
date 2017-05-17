"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const common_1 = require("@angular/common");
const app_component_1 = require("../app/components/app/app.component");
const app_service_1 = require("../app/components/app/app.service");
const signin_component_1 = require("../app/components/account/signin.component");
const admin_bar_component_1 = require("../app/components/admin-bar/admin-bar.component");
const calendar_component_1 = require("../app/components/calendar/calendar.component");
const vacation_component_1 = require("../app/components/vacation/vacation.component");
const users_component_1 = require("../app/components/users/users.component");
const policy_component_1 = require("../app/components/policy/policy.component");
const appRoutes = [
    { path: 'signin', component: signin_component_1.SigninComponent },
    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
    },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'policy', component: policy_component_1.PolicyComponent },
    { path: 'vacation', component: vacation_component_1.VacationComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [app_component_1.AppComponent, admin_bar_component_1.AdminBarComponent, signin_component_1.SigninComponent, calendar_component_1.CalendarComponent, vacation_component_1.VacationComponent, users_component_1.UsersComponent, policy_component_1.PolicyComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map