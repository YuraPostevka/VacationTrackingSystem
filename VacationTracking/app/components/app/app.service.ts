import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Vacation } from '../vacation/vacation.model';
import { IVacation } from '../vacation/vacation.component';
import { User } from '../account/user.model';

@Injectable()
export class AppService {

    constructor(private _http: Http) {
    }

    getAllVacations = (): Observable<IVacation[]> => {
        var headers = new Headers();
        headers.append('Authorization', 'bearer ' + localStorage.getItem('token'));
        return this._http.get("/api/Vacations/GetAll", { headers: headers }).map(data => data.json());
    }

    createNewVacation = (vacation: Vacation) => {
        var headers = new Headers();
        headers.append('Authorization', 'bearer ' + localStorage.getItem('token'));
        headers.append('Content-Type', "application/json");

        return this._http.post("/api/Vacations/Create", JSON.stringify(vacation), { headers: headers });
    }
    getToken = (user: User) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post("/Token", "userName=" + user.email + "&password=" + user.password + "&grant_type=password", { headers: headers }).map(res => res.json());
    }
}