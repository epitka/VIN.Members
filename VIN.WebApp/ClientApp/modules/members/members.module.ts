﻿import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { MembersRoutingModule } from '../members/members-routing.module';

import { MembersRootComponent } from '../members/membersRootComponent';
import { MembersListComponent } from '../members/members-list/members-list.component';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';


import { MembersService } from './members.service';
import { Header } from '../shared/components/header/header';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        //BrowserModule,
        SharedModule,
        NgbModule,
        MembersRoutingModule],
    declarations: [MembersRootComponent,
        MembersListComponent,
        MemberEditComponent],
    providers: [MembersService]
})
export class MembersModule { }
