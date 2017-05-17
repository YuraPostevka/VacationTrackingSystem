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
const app_service_1 = require("../app/app.service");
const vacation_model_1 = require("./vacation.model");
let VacationComponent = class VacationComponent {
    constructor(service) {
        this.service = service;
        this.vacations = [];
        this.newVacation = new vacation_model_1.Vacation();
    }
    ngOnInit() {
        console.log();
        this.getAll();
        this.newVacation.StartDate = new Date(2017, 4, 16);
        this.newVacation.EndDate = new Date(2017, 4, 16);
    }
    getAll() {
        this.service.getAllVacations().subscribe((data) => {
            for (var i = 0; i < data.length; i++) {
                data[i].StartDate = data[i].StartDate.substring(0, data[i].StartDate.indexOf('T'));
                data[i].EndDate = data[i].EndDate.substring(0, data[i].EndDate.indexOf('T'));
            }
            this.vacations = data;
        });
    }
    Create() {
        this.service.createNewVacation(this.newVacation).subscribe((data) => {
            //this.vacations.push(this.newVacation);
            this.getAll();
            this.Clear();
        });
    }
    Clear() {
        this.newVacation = new vacation_model_1.Vacation();
        this.newVacation.StartDate = new Date(2017, 4, 16);
        this.newVacation.EndDate = new Date(2017, 4, 16);
    }
};
VacationComponent = __decorate([
    core_1.Component({
        selector: 'vacation',
        templateUrl: '../app/components/vacation/vacation.component.html',
        styles: [`

.main-row_header {
    /* TODO refactore */
    border: none;
    font-weight: normal;
    color: #5ba4e5;
    letter-spacing: -0.01em;
    font-size: 19px;
    line-height: 1.15em;
    text-align: left;
    padding-top: 30px;
    padding-bottom: 30px;
}

.top-leave-type-statistics {
    text-align: center;
}

    .top-leave-type-statistics dt {
        font-size: 75px;
        color: #61686b;
        font-weight: 100;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 20px;
    }

    .top-leave-type-statistics dd {
        font-size: 16px;
    }

.secondary-leave-type-statistics {
    font-size: 16px;
}

    .secondary-leave-type-statistics dt {
        text-align: center;
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #e5e5e5;
    }

    .secondary-leave-type-statistics dd {
        padding-left: 10px;
        padding-right: 10px;
    }
`]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], VacationComponent);
exports.VacationComponent = VacationComponent;
//# sourceMappingURL=vacation.component.js.map