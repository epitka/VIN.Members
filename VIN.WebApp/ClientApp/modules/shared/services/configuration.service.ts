import { Injectable }       from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { IConfiguration }   from '../models/configuration.model';
import { StorageService }   from './storage.service';

import 'rxjs/Rx';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer }         from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { Subject }          from 'rxjs/Subject';


@Injectable()
export class ConfigurationService {

    serverSettings: IConfiguration;

    // observable that is fired when settings are loaded from server
    private settingsLoadedSource = new Subject();

    settingsLoaded$ = this.settingsLoadedSource.asObservable();
    isReady: boolean = false;

    constructor(private http: Http, private storageService: StorageService) { }
    
    load() {
        const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;

        let url = `${baseURI}Configuration/Settings`;

        this.http.get(url).subscribe((response: Response) => {
            console.log('server settings loaded');
            this.serverSettings = response.json();
            console.log(this.serverSettings);
           
            this.storageService.store('memberAPIUrl', this.serverSettings.memberAPIUrl);
          
            this.isReady = true;
            this.settingsLoadedSource.next();
        });
    }
}
