import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AppService } from '../app/app.service';
import { Vacation } from './vacation.model';

@Component({
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
})

export class VacationComponent implements OnInit {
    constructor(private service: AppService) { }

    vacations: IVacation[] = [];
    newVacation: Vacation = new Vacation();

    ngOnInit(): void {
        console.log();
        this.getAll();
        this.newVacation.StartDate = new Date(2017, 4, 16);
        this.newVacation.EndDate = new Date(2017, 4, 16);
    }

    getAll() {
        this.service.getAllVacations().subscribe(
            (data) => {
                for (var i = 0; i < data.length; i++) {
                    data[i].StartDate = data[i].StartDate.substring(0, data[i].StartDate.indexOf('T'));
                    data[i].EndDate = data[i].EndDate.substring(0, data[i].EndDate.indexOf('T'));
                }
                this.vacations = data;
            }
        );
    }

    Create() {
        this.service.createNewVacation(this.newVacation).subscribe(
            (data) => {
                //this.vacations.push(this.newVacation);
                this.getAll();
                this.Clear();
            }
        );

    }

    Clear() {
        this.newVacation = new Vacation();
        this.newVacation.StartDate = new Date(2017, 4, 16);
        this.newVacation.EndDate = new Date(2017, 4, 16);
    }

}
export interface IVacation {
    Id?: number;
    StartDate?: any;
    EndDate?: any;
    Status?: string;
    ApprovedBy?: string;
    Type: string;
}