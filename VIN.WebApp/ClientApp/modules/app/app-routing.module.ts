import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";

const appRoutes: Routes = [
    //{ path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'test',
        component: TestComponent,
        outlet:"modal"
    },
    {
        path: 'members',
        loadChildren: '../members/members.module#MembersModule',
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true // <-- debugging purposes only
                // preloadingStrategy: SelectivePreloadingStrategy,
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }


