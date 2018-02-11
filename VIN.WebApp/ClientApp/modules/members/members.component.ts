import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';
import { IMember } from '../shared/models/member.model';
import { IMemberList } from '../shared/models/memberList.model';

import { IPager } from '../shared/models/pager.model';
import { ConfigurationService } from '../shared/services/configuration.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'vin-members',
    templateUrl: './members.component.html',
    styleUrls:['./members.component.css']
})
export class MembersComponent implements OnInit {

    totalItemsCount: number;
    members: IMember[];
    errorReceived: boolean;
    
    constructor(private service: MembersService, private configurationService: ConfigurationService) { }
    
    private _page: number = 1;
    get page(): number {
        return this._page;
    }
    set page(value: number) {
        if (value === this._page) return;
        this._page = value;
        this.getMembers();
    }

    private _pageSize: number = 10;
    get pageSize(): number {
        return this._pageSize;
    }
    set pageSize(value: number) {
        if (value === this._pageSize) return;
        this._pageSize = value;
        this._page = 1;
        this.getMembers();
    }

    public sortByField: string = 'username';
    public sortByDirection: string = 'asc';
    
    ngOnInit() {
        if (this.configurationService.isReady) {
            this.getMembers();
        } else {
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.getMembers();
            });
        }
    }

   
    onSortByChange(value: string) {

        console.log("onSortByChange: " + value);

        if (value === this.sortByField) {
            this.sortByDirection = this.sortByDirection === 'asc' ? 'desc' : 'asc'
        } else {
            this.sortByField = value;
            this.sortByDirection = 'asc';
        }

        this._page = 1;

        this.getMembers();
    }

    getMembers() {

        console.log("in get members");
        this.errorReceived = false;

        this.service.getMembers(this.page, this.pageSize, this.sortByField, this.sortByDirection)
            .catch((err) => this.handleError(err))
            .subscribe((response: IMemberList) => {

                console.log("fetched members");
                console.log(response);

                this.members = response.data;
                
                this.totalItemsCount = response.rowCount;
            });
    }

    private handleError(error: any) {
        this.errorReceived = true;
        return Observable.throw(error);
    }
}

