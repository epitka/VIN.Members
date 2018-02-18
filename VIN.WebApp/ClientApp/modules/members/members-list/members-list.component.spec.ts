/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MembersListComponent } from './members-list.component';

let component: MembersListComponent;
let fixture: ComponentFixture<MembersListComponent>;

describe('membersList component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MembersListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MembersListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});