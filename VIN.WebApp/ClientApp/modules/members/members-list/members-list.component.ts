﻿import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { IMember } from '../member.model';
import { IMemberList } from './members-list.model';
import { IPager } from '../../shared/models/pager.model';
import { ConfigurationService } from '../../shared/services/configuration.service';
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MemberEditComponent } from '../member-edit/member-edit.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';

import { Router, ActivationEnd, ChildActivationStart, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'vin-members-list',
    templateUrl: './members-list.component.html',
    styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

    totalItemsCount: number;
    members: IMember[];
    errorReceived: boolean;

    constructor(private modalService: NgbModal,
        private service: MembersService,
        private configurationService: ConfigurationService,
        private router: Router) {

        this.router.events
            .filter(event => event instanceof ActivationEnd)
            .subscribe((event: any) => {
                console.log("List: " + event);
                console.log(event);
                if (event.snapshot.data.isModal) {
                    const modalRef = this.modalService.open(ModalComponent);
                    modalRef.componentInstance.loadComponent(event.snapshot.component, { memberId: 123 });
                }
            });
    }

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

    onDelete(item: IMember) {
        //TODO: replace this with dialog service component
        if (window.confirm('Are sure you want to delete this member?')) {
            //put your delete method logic here
            this.service.deleteMember(item).subscribe(x => {
                this.getMembers();
            });
        }
    }

    onEdit(item: IMember) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.loadComponent(MemberEditComponent, {memberId:item.memberId});
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

