import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';
import { IMemberList } from '../shared/models/memberList.model';
import {IMember} from '../shared/models/member.model';
import { IPager } from '../shared/models/pager.model';
import { ConfigurationService } from '../shared/services/configuration.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'vin-members',
    styleUrls: ['./members.component.scss'],
    templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
    private interval = null;
    paginationInfo: IPager;
    members: IMember[];
    errorReceived: boolean;

    constructor(private service: MembersService, private configurationService: ConfigurationService) { }

    ngOnInit() {
        if (this.configurationService.isReady) {
            this.getMembers(10, 0);
        } else {
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.getMembers(10, 0);
            });
        }
    }

    onPageChanged(value: any) {
        console.log('members pager event fired' + value);
        //event.preventDefault();
        this.paginationInfo.actualPage = value;
        this.getMembers(this.paginationInfo.itemsPage, value);
    }

    getMembers(pageSize: number, pageIndex: number) {
        this.errorReceived = false;
        this.service.getMembers(pageIndex, pageSize)
            .catch((err) => this.handleError(err))
            .subscribe(response => {
                this.members = response.data;
                this.paginationInfo = {
                    actualPage: response.pageIndex,
                    itemsPage: response.pageSize,
                    totalItems: response.count,
                    totalPages: Math.ceil(response.count / response.pageSize),
                    items: response.pageSize
                };
            });
    }

    private handleError(error: any) {
        this.errorReceived = true;
        return Observable.throw(error);
    }
}

