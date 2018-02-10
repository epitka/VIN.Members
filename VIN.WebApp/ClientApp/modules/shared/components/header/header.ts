import { Component, Input } from '@angular/core';

@Component({
    selector: 'vin-header',
    templateUrl: './header.html'
})
export class Header {
    @Input()
    url: string;
}
