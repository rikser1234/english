import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';

@Component({
  selector: 'app-prepodavatel',
  templateUrl: './prepodavatel.component.html',
  styleUrls: ['./prepodavatel.component.css']
})
export class PrepodavatelComponent implements OnInit {

  constructor(private AJAXService:AJAXService, private LoadScriptService: LoadScriptService) { }

  teacherInfo;
  title = 'Преподаватели';
  @ViewChild('teacherWrap') teacherWrap: ElementRef;
  ngOnInit() {
    document.querySelector('title').textContent = this.title;
    this.AJAXService.getData().then((data) => {
      let dataJSON = data.json();
      this.teacherInfo = this.AJAXService.getArticle(dataJSON, 11)[0].introtext;
      this.teacherWrap.nativeElement.innerHTML = this.teacherInfo;
    })
  }


  ngAfterViewChecked() {
    let divs = document.querySelectorAll('.teacher-text');

    if (divs.length > 0) {
      this.LoadScriptService.initializeScript();
    }

  }

  ngOnDestroy() {
    this.LoadScriptService.removeScript();

  }

}
