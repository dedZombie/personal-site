import { Component } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
    animations: [
        trigger('animateScale', [
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'scale(0)'
                }),
                animate('350ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
            ])
        ])
    ]
})
export class HomeComponent {

    constructor() {}
}