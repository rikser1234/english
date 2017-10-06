import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import {AJAXService} from '../ajax.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  moduleInfo: any;
  textData: any;
  constructor(private AJAXService: AJAXService) { }

  @ViewChild('responsesWrap') responsesWrap: ElementRef;

  ngOnInit() {
    this.AJAXService.getModules().then((data)=> {
      this.moduleInfo = JSON.parse(this.AJAXService.getModule(data.json())[0].params);

      let keys = [];

      for (let key in this.moduleInfo) {
        if (key.indexOf('img') > -1) {
          keys.push(this.moduleInfo[key]);
        }
      }

      let totalNumber = keys.filter((key)=> key !='' ).length;

      let objects = [];
      for (let i = 0; i < totalNumber; i++) {
        objects.push({});
      }
      for (let key in this.moduleInfo) {
        let keyNumber = parseInt(key[key.length - 1]) - 1;
        if (objects[keyNumber]) {
          if (key.indexOf('img') > -1) {
            objects[keyNumber]['img'] = this.moduleInfo[key];
          }

          if (key.indexOf('resp_link') > -1) {
            objects[keyNumber]['resp_link'] = this.moduleInfo[key];
          }


          if (key.indexOf('resp_name') > -1) {
            objects[keyNumber]['resp_name'] = this.moduleInfo[key];
          }

          if (key.indexOf('resp_text') > -1) {
            objects[keyNumber]['resp_text'] = this.moduleInfo[key];
          }
        }
      }


      this.textData = objects;

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
