import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';



@Component({
  selector: 'app-news-navigation',
  templateUrl: './news-navigation.component.html',
  styleUrls: ['./news-navigation.component.css'],
  inputs: ['articles']
})
export class NewsNavigationComponent implements OnInit {

    articles;
    newsText;
    title = 'Новости';

  constructor(private AJAXService:AJAXService, private LoadScriptService: LoadScriptService) { }

    @ViewChild('newsWrap') newsWrap: ElementRef;
  ngOnInit() {

      document.querySelector('title').textContent = this.title;
      this.AJAXService.getModules().then((data)=>{
          this.newsText  = JSON.parse(this.AJAXService.getModule(data.json(),114)[0].params).customHtml;
          this.newsWrap.nativeElement.innerHTML = this.newsText;



      })

      this.AJAXService.getData().then((data) => {
          let dataJSON = data.json();
          this.articles = this.AJAXService.getNewsArticles(dataJSON).sort((a,b)=> b.id -a.id);
          for (let article of this.articles) {
              article.images = JSON.parse(article.images);
          }
      })

  }


    ngAfterViewChecked() {
        let divs = document.querySelectorAll('.maretial-item');

        if (divs.length > 0) {
            this.LoadScriptService.initializeScript();
        }

    }

    ngOnDestroy() {
        this.LoadScriptService.removeScript();

    }





}
