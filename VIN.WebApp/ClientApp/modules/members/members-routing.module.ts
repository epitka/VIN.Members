import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersRootComponent } from '../members/membersRootComponent';
import { MembersListComponent } from '../members/members-list/members-list.component';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

const membersRoutes: Routes = [
    {
        path: 'members',
       // pathMatch: 'full',
        component: MembersRootComponent,
        children: [
            { path: 'edit/:id', component: MemberEditComponent, data: { isModal: true } },
            { path: '', component: MembersListComponent }]
    }];

@NgModule({
    imports: [
        RouterModule.forChild(membersRoutes)
    ],
    exports: [
        RouterModule
    ]
    //providers: [
    //    CrisisDetailResolver
    //]
})
export class MembersRoutingModule { }
