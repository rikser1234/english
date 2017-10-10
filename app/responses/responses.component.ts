import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {ModuleSortService} from '../services/module-sort.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  moduleInfo: any;
  textData: any;
  title = 'Отзывы';
  constructor(private AJAXService: AJAXService, private ModuleSortService: ModuleSortService) { }

  @ViewChild('responsesWrap') responsesWrap: ElementRef;

  ngOnInit() {
    document.querySelector('title').textContent = this.title;
    this.AJAXService.getModules().then((data)=> {
      this.moduleInfo = JSON.parse(this.AJAXService.getModule(data.json(),98)[0].params);

      this.textData = this.ModuleSortService.sortInfo(this.moduleInfo, ['img', 'resp_link', 'resp_name', 'resp_text' ]);



    })
  }

  ngAfterViewChecked() {


    for (let i = 0; i < this.responsesWrap.nativeElement.children.length; i++) {
      setTimeout(()=>{
        this.responsesWrap.nativeElement.children[i].classList.add('deployed');
      },250 * i)

    }
  }

}
