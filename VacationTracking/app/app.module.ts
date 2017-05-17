import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from '../app/components/app/app.component';
import { AppService } from '../app/components/app/app.service';
import { SigninComponent } from '../app/components/account/signin.component';
import { AdminBarComponent } from '../app/components/admin-bar/admin-bar.component';
import { CalendarComponent } from '../app/components/calendar/calendar.component';
import { VacationComponent } from '../app/components/vacation/vacation.component';
import { UsersComponent } from '../app/components/users/users.component';
import { PolicyComponent } from '../app/components/policy/policy.component';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent },
    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
    },
    { path: 'users', component: UsersComponent },
    { path: 'policy', component: PolicyComponent },
    { path: 'vacation', component: VacationComponent },
    { path: 'calendar', component: CalendarComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent, AdminBarComponent, SigninComponent, CalendarComponent, VacationComponent, UsersComponent, PolicyComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AppService]
})
export class AppModule {
}

