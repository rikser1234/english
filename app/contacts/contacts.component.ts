import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private AJAXService:AJAXService, private LoadScriptService: LoadScriptService) { }

  teacherInfo;
  title = 'Контакты';
  @ViewChild('contactsWrap') contactsWrap: ElementRef;
  ngOnInit() {
    document.querySelector('title').textContent = this.title;
    this.AJAXService.getData().then((data) => {
      let dataJSON = data.json();
      this.teacherInfo = this.AJAXService.getArticle(dataJSON, 12)[0].introtext;
      this.contactsWrap.nativeElement.innerHTML = this.teacherInfo;
    })
  }


  ngAfterViewChecked() {
    let divs = document.querySelectorAll('.pagec-portret');

    if (divs.length > 0) {
      this.LoadScriptService.initializeScript();
    }

  }

  ngOnDestroy() {
    this.LoadScriptService.removeScript();

  }
}
