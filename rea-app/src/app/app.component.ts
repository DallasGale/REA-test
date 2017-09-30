import { Component, OnInit } from '@angular/core';
import { ReaDataService } from './services'; // imported data service

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    title = 'REA Coding Challenge';
    data: any;
    public recentProperty;
    public savedProperties = [];
    
    saveProperty(property) {        
        console.log(JSON.stringify(property));
        this.savedProperties.push(property);
    }

    deleteProperty(property) {
        console.log("delete property = " + property);
        var index = this.savedProperties.indexOf(property);
        if (index >= 0) {
            this.savedProperties.splice(index, 1);
        }
    }

    // added data service to the constructor
    constructor(private reaDataService: ReaDataService) { }
    
    // initialised the service
    ngOnInit() {
        this.data = this.reaDataService.getReaData();
    }
}
