import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ReaDataService } from '../../services'; // imported data service

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})


export class ResultsComponent implements OnInit {
    data: any;

    
    constructor(private reaDataService: ReaDataService) { }

    
    // initialised the service
    ngOnInit() {
        this.data = this.reaDataService.getReaData();
    }
}
