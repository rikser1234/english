import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';

@Component({
  selector: 'app-intensiv',
  templateUrl: './intensiv.component.html',
  styleUrls: ['./intensiv.component.css']
})
export class IntensivComponent implements OnInit {

  @ViewChild('intensivWrap') intensivWrap: ElementRef;
  constructor(private AJAXService:AJAXService, private LoadScriptService: LoadScriptService) { }
  innerHTML;
  title = 'Интенсив';

  ngOnInit() {
    document.querySelector('title').textContent = this.title;
    this.AJAXService.getData().then((data) => {
      let dataJSON = data.json();
      this.innerHTML = this.AJAXService.getArticle(dataJSON, 3);
      this.innerHTML = this.innerHTML[0].introtext;
      this.intensivWrap.nativeElement.innerHTML = this.innerHTML;
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
