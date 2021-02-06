import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IUsers {
    id: string;
    name: string;
    username: string;
    email: string;
    address: IAdress
    phone: string;
    website: string;
    company: ICompany;
}

export interface IAdress {
    street: string;
    suit: string;
    city: string;
    zipcode: string;
    geo: IGeo
}

export interface IGeo {
    lat: string;
    long: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

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
export class HomeComponent implements OnInit {
    private url: string = 'https://jsonplaceholder.typicode.com/users';
    private localServer: string = 'http://localhost:8001';

    constructor(private http: HttpClient) {}

    fetchUsers() {
        this.http.get(this.localServer + '/api/users').subscribe(
            (data: IUsers) => { console.log(data); }
        );
    }

    ngOnInit() {
        this.fetchUsers();
    }
}