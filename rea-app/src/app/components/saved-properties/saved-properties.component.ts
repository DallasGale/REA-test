import { Component, Input } from '@angular/core';
import { ReaDataService } from '../../services'; // imported data service

@Component({
    selector: 'app-saved-properties',
    templateUrl: './saved-properties.component.html',
    styleUrls: ['../../../sass/properties.scss']
})

export class SavedPropertiesComponent {    
    @Input() property:ReaDataService;

    public savedProperties = [];

    deleteProperty(property) {
        console.log("delete property = " + property);
        var index = this.savedProperties.indexOf(property);
        if (index >= 0) {
            this.savedProperties.splice(index, 1);
        }
    }
}