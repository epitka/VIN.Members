import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { MembersListComponent } from '../members/members-list/members-list.component';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { MembersService } from './members.service';
import { Header } from '../shared/components/header/header';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [BrowserModule, SharedModule, NgbModule],
    declarations: [MembersListComponent, MemberEditComponent],
    providers: [MembersService]
})
export class MembersModule { }
