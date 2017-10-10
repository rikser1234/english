import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.css']
})
export class UslugiComponent implements OnInit {

  private sub: any;
  alias;
  constructor(private AJAXService:AJAXService, private LoadScriptService: LoadScriptService, private route: ActivatedRoute) { }
uslugiInfo;
  title = 'Услуги';
  @ViewChild('uslugiWrap') uslugiWrap: ElementRef;

  ngOnInit() {
    document.querySelector('title').textContent = this.title;
    this.AJAXService.getData().then((data) => {
      let dataJSON = data.json();
      this.uslugiInfo = this.AJAXService.getArticle(dataJSON, 10)[0].introtext;
      this.uslugiWrap.nativeElement.innerHTML = this.uslugiInfo;
    })



  }


  ngAfterViewChecked() {
    let divs = document.querySelectorAll('.services-wrap');

    if (divs.length > 0) {
      this.LoadScriptService.initializeScript();

      if (this.route.params) {
      this.sub = this.route.params.subscribe(params => {
        this.alias = params['id'];
        if (this.alias) {
          let elem = document.querySelectorAll('.service-popup[data-id="#'+this.alias+'"]') as HTMLCollectionOf<HTMLElement>;


        if (elem) {
          elem[0].style.display = 'block';
          elem[0].style.opacity = '1';
        }
        }


      });
      }

    }

  }


  ngOnDestroy() {
    this.LoadScriptService.removeScript();
    if (this.sub){
      this.sub.unsubscribe();
    }

  }

}
