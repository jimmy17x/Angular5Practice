import { Component, OnInit } from '@angular/core';

@Component({
    //meta data
    selector: 'app-root', //  html tafg <app-root></app-root>

    // view
    templateUrl: 'app.component.html',

    // scoped styles
    // only for app component
    styleUrls: [
        'app.component.css'
    ]

})



export class AppComponent implements OnInit {

    // models , can be accessed from view
    title: string = 'Product App';
    today: Date = new Date();

    // view is not yet loaded   
    constructor() {
        console.log("App comp created ");
    }
    // called after view is loaded
    ngOnInit() {
        console.log("App view is loaded");
    }

}


