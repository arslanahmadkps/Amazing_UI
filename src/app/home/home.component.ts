import { Component, Input } from "@angular/core";


@Component(
    {
        selector: 'app-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css'],
    }
)

export class HomeComponent {
    @Input() currentDateTime: Date = new Date();
    @Input() brandName: string = '';

    constructor() {

    }
}