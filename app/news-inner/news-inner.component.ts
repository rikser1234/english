import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AJAXService} from '../ajax.service';

@Component({
  selector: 'app-news-inner',
  templateUrl: './news-inner.component.html',
  styleUrls: ['./news-inner.component.css']
})
export class NewsInnerComponent implements OnInit {

    innerHTML;
    alias;
    private sub: any;
    constructor(private route: ActivatedRoute, private AJAXService: AJAXService) {}

     @ViewChild('newsWrap') newsWrap: ElementRef;

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.alias = params['id'];
          this.AJAXService.getData().then((data) => {
              let dataJSON = data.json();
              console.log(dataJSON)
              this.innerHTML = this.AJAXService.getSingleArticle(dataJSON, this.alias);
              this.innerHTML = this.innerHTML[0].introtext;
              this.newsWrap.nativeElement.innerHTML = this.innerHTML;
          })

      });
  }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
