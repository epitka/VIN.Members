import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 


// Services
import { DataService } from './services/data.service';
import { ConfigurationService } from './services/configuration.service';
import { StorageService } from './services/storage.service';

// Components:
import { NavMenuComponent} from "./components/navmenu/navmenu.component"
import { Header } from './components/header/header';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Pipes:
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        JsonpModule
    ],
    declarations: [
        NavMenuComponent,
        Header,
        PageNotFoundComponent,
        UppercasePipe
    ],
    exports: [
        // Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // Providers, Components, directive, pipes
        NavMenuComponent,
        Header,
        PageNotFoundComponent,
        UppercasePipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // Providers
                DataService,
                ConfigurationService, 
                StorageService
            ]
        };
    }
}
