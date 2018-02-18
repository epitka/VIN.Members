import { Routes, RouterModule } from '@angular/router';

import { MembersListComponent } from '../members/members-list/members-list.component';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const routes: Routes = [
    //{ path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'members', component: MembersListComponent },
    { path: 'members/edit/:id', component: MemberEditComponent },

   // { path: 'members/:id', component: MemberDetailComponent },
];

export const routing = RouterModule.forRoot(routes);
