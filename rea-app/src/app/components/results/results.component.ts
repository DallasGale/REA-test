import { Component, Input, OnInit } from '@angular/core';
import { ReaDataService } from '../../services'; // imported data service

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['../../../sass/properties.scss']
})


export class ResultsComponent {
    @Input() property:ReaDataService;

    public savedProperties = [];
    
    saveProperty(property) {        
        console.log(JSON.stringify(property));
        this.savedProperties.push(property);
    }
}