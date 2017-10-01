import { Component, OnInit } from '@angular/core';
import {AJAXService} from '../ajax.service';


@Component({
  selector: 'app-news-navigation',
  templateUrl: './news-navigation.component.html',
  styleUrls: ['./news-navigation.component.css'],
  inputs: ['articles']
})
export class NewsNavigationComponent implements OnInit {

    articles;

  constructor(private AJAXService: AJAXService ) {

  }


  ngOnInit() {
      this.AJAXService.getData().then((data) => {
          let dataJSON = data.json();
          this.articles = this.AJAXService.getNewsArticles(dataJSON).sort((a,b)=> b.id -a.id);
          for (let article of this.articles) {
              article.images = JSON.parse(article.images);
          }
      })

  }





}
