import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module"
import {MembersModule} from '../members/members.module'
import { routing } from '../app/app.routes';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedModule.forRoot(),
        MembersModule,
        routing]
})
export class AppModuleShared {
}
