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
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let AppService = class AppService {
    constructor(_http) {
        this._http = _http;
        this.getAllVacations = () => {
            var headers = new http_1.Headers();
            headers.append('Authorization', 'bearer ' + localStorage.getItem('token'));
            return this._http.get("/api/Vacations/GetAll", { headers: headers }).map(data => data.json());
        };
        this.createNewVacation = (vacation) => {
            var headers = new http_1.Headers();
            headers.append('Authorization', 'bearer ' + localStorage.getItem('token'));
            headers.append('Content-Type', "application/json");
            return this._http.post("/api/Vacations/Create", JSON.stringify(vacation), { headers: headers });
        };
        this.getToken = (user) => {
            let headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this._http.post("/Token", "userName=" + user.email + "&password=" + user.password + "&grant_type=password", { headers: headers }).map(res => res.json());
        };
    }
};
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map