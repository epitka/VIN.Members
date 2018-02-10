import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from '../members/members.component';

export const routes: Routes = [
    //{ path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'members', component: MembersComponent },
   // { path: 'members/:id', component: MemberDetailComponent },
];

export const routing = RouterModule.forRoot(routes);
