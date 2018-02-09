import { Title } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

import { DataService } from './shared/services/data.service';
import { ConfigurationService } from './shared/services/configuration.service';

/*
 * App Component
 * Top Level Component
 */

@Component({
    selector: 'vin-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private titleService: Title, private configurationService: ConfigurationService) {
    }

    ngOnInit() {
        console.log('app on init');

        //Get configuration from server environment variables:
        console.log('configuration');
        this.configurationService.load();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle('VIN Web App');
    }
}
