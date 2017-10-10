import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import {LoadScriptService} from '../services/load-script.service';
import {AJAXService} from '../services/ajax.service';
import {ModuleSortService} from '../services/module-sort.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  teacher;
  teacherInfo;
  advantagesInfo;
  responses;
  responsesInfo;
  title = 'Главная'

  constructor(private LoadScriptService: LoadScriptService, private AJAXService: AJAXService, private ModuleSortService: ModuleSortService ) { }

  @ViewChild('teacherWrap') teacherWrap: ElementRef;
  @ViewChild('advantagesWrap') advantagesWrap: ElementRef;


  ngOnInit() {

    document.querySelector('title').textContent = this.title;

    this.teacher = this.AJAXService.getModules().then((data)=>{
      this.teacherInfo  = JSON.parse(this.AJAXService.getModule(data.json(),91)[0].params).customHtml;
      this.teacherWrap.nativeElement.innerHTML = this.teacherInfo;

      this.advantagesInfo = JSON.parse(this.AJAXService.getModule(data.json(), 90)[0].params).customHtml;
      this.advantagesWrap.nativeElement.innerHTML = this.advantagesInfo;

      this.responses = JSON.parse(this.AJAXService.getModule(data.json(),98)[0].params);

      this.responsesInfo = this.ModuleSortService.sortInfo(this.responses, ['img', 'resp_link', 'resp_name', 'resp_text' ]);

    })
  }


  ngAfterViewChecked() {
    let divs = document.querySelectorAll('.banners-item');

    if (divs.length > 1) {
      this.LoadScriptService.initializeScript();
    }

  }

  ngOnDestroy() {
    this.LoadScriptService.removeScript();
  }


}
