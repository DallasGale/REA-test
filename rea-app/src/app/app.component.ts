import { Component, OnInit } from '@angular/core';
import { ReaDataService } from './services'; // imported data service

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    title = 'REA Coding Challenge';
    data: any;

    // added data service to the constructor
    constructor(private reaDataService: ReaDataService) { }

    // initialised the service
    ngOnInit() {
        this.data = this.reaDataService.getReaData();
    }
}
