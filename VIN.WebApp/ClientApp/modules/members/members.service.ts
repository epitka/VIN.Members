import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../shared/services/data.service';
import { IMemberList } from '../shared/models/memberList.model';
import { ConfigurationService } from '../shared/services/configuration.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {

    private membersUrl: string = '';

    constructor(private service: DataService, private configurationService: ConfigurationService) {
       
        if (this.configurationService.isReady)
            this.membersUrl = this.configurationService.serverSettings.memberAPIUrl;
        else
            this.configurationService.settingsLoaded$.subscribe(x => this.membersUrl = this.configurationService.serverSettings.memberAPIUrl);
    }

    getMembers(pageNumber: number, pageSize: number):Observable<IMemberList> {
        let url = this.membersUrl + '/api/members';
        url = url + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize;

        return this.service.get(url).map((response: Response) => {
            return response.json();
        });
    } 
}

