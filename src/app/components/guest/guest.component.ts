import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course';
import {GuestService} from '../../services/guest/guest.service';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
    arrTopCourses: Course[] = [];
    showSpinnerTop5 = true;

    constructor(private _guestService: GuestService) {
    }

    ngOnInit() {
        this._guestService.getTop5()
            .subscribe(
                res => {
                    this.arrTopCourses = res.top;
                    console.log('RES getTop5 :', res);
                    console.log('this.arrTopCourses:', this.arrTopCourses);
                    this.showSpinnerTop5 = false;
                },
                err => {
                    console.log(err);
                }
            );
    }

}
