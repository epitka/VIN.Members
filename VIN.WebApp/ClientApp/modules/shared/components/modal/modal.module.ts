import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalContentDirective } from './modalContent.directive';

@NgModule({
    imports: [],
    declarations: [
        ModalComponent, ModalContentDirective
    ],
    entryComponents: [ModalComponent],
    exports: []
})
export class ModalModule {
}

