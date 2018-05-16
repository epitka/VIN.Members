import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "../shared/shared.module"
import {MembersModule} from '../members/members.module'
import { AppRoutingModule } from '../app/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        AngularFontAwesomeModule,
        NgbModule.forRoot(),
        SharedModule.forRoot(),
        MembersModule,
        AppRoutingModule]
})
export class AppModuleShared {
}
