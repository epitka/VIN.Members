import { Title } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../shared/services/data.service';
import { ConfigurationService } from '../shared/services/configuration.service';

import { Router, ActivationStart, NavigationStart } from '@angular/router';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

/*
 * App Component
 * Top Level Component
 */

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private titleService: Title,
        private configurationService: ConfigurationService,
        private router: Router,
        private modalService: NgbModal) {
    }

    ngOnInit() {
        console.log('app on init');

        //Get configuration from server environment variables:
        console.log('configuration');
        this.configurationService.load();

        //this.router.events
        //    .filter(event => event instanceof ActivationStart)
        //    .subscribe((event: ActivationStart) => {
        //        if (event.snapshot.data.isModal) {
        //            const modalRef = this.modalService.open(ModalComponent);
        //            modalRef.componentInstance.loadComponent(event.snapshot.component, { memberId: 123 });
        //        }

        //    });
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle('VIN Web App');
    }
}

