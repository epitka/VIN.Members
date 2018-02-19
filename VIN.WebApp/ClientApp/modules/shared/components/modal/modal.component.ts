import { ModalContentDirective } from './modalContent.directive';
import { AfterViewInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { Type, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberEditComponent } from '../../../members/member-edit/member-edit.component';

//NOTE: there is some issue with bootstrap not emitting css .fade.show to turn opacity to 1, hence style sheet

@Component({
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
    @Input() toLoad: Type<any>;
    @ViewChild(ModalContentDirective) host: ModalContentDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, public activeModal: NgbActiveModal) { }

     ngOnInit() {
        this.loadComponent();
    }

    loadComponent() {

        //let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.toLoad);

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MemberEditComponent);

        let viewContainerRef = this.host.viewContainerRef;

        //viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);

    }
}