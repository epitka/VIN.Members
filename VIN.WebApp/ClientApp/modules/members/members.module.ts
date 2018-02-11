import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { MembersComponent } from './members.component';
import { MembersService } from './members.service';
import { Header } from '../shared/components/header/header';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [BrowserModule, SharedModule, NgbModule],
    declarations: [MembersComponent],
    providers: [MembersService]
})
export class MembersModule { }
