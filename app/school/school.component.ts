import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  @ViewChild('schoolWrap') schoolWrap: ElementRef;
  constructor(private AJAXService:AJAXService, private LoadScriptService: LoadScriptService) { }
  innerHTML;
  title = 'Школа';

  ngOnInit() {
    document.querySelector('title').textContent = this.title;
    this.AJAXService.getData().then((data) => {
      let dataJSON = data.json();
      this.innerHTML = this.AJAXService.getArticle(dataJSON, 19);
      this.innerHTML = this.innerHTML[0].introtext;
      this.schoolWrap.nativeElement.innerHTML = this.innerHTML;
    })
  }

  ngAfterViewChecked() {
    let divs = document.querySelectorAll('.slide-content-wrap');

    if (divs.length > 0) {
      this.LoadScriptService.initializeScript();
    }

  }

  ngOnDestroy() {
    this.LoadScriptService.removeScript();
    let planes = document.querySelectorAll('.plane');
    [].forEach.call(planes, function(plane){
      plane.parentNode.removeChild(plane);
    })

  }

}
