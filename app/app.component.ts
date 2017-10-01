import { Component } from '@angular/core';
import {AJAXService} from './ajax.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
    title = 'app works!';
    data;
    newsArticles;
    constructor(private AJAXService: AJAXService) {

    }





    ngOnInit() {

    }



}
