import { Component, AfterContentInit } from '@angular/core';
import {AJAXService} from './services/ajax.service';
import {LoadScriptService} from './services/load-script.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
    data;
    newsArticles;
    constructor(private AJAXService: AJAXService, private LoadScript: LoadScriptService) {

    }



    ngAfterViewInit() {

    }

    ngOnDestroy() {

    }



}
