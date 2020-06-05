import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
    animations: [
        trigger('animateScale', [
            state('show', style({
                opacity: 1,
                transform: 'scale(1)'
            })),
            state('hide', style({
                opacity: 0,
                transform: 'scale(0)'
            })),
            transition('show => hide', [
                animate('350ms ease-out')
            ]),
            transition('hide => show', [
                animate('350ms ease-in')
            ])
        ])
    ]
})
export class HomeComponent implements OnInit, AfterViewInit {

    show = true;

    constructor() {}

    get stateName() {
        return this.show ? 'show' : 'hide';
    }

    ngOnInit() {
        // this.show = !this.show;
    }

    ngAfterViewInit() {
        // this.show = !this.show;
    }

    toggle() {
        this.show = !this.show;
    }
}