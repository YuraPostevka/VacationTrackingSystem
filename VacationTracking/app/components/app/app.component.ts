import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    template: `
    <div class="container">
        <nav id='admin-bar' class="navbar navbar-default">
        </nav>

        <div class="container-fluid">
        
             <router-outlet></router-outlet>        

        </div>
    </div>
    
 `,
    styleUrls: ['../app/components/app/app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) this.router.navigate(["./signin"]);
    }
}