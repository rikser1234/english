import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AJAXService} from '../services/ajax.service';
import {LoadScriptService} from '../services/load-script.service';

@Component({
  selector: 'app-news-inner',
  templateUrl: './news-inner.component.html',
  styleUrls: ['./news-inner.component.css']
})
export class NewsInnerComponent implements OnInit {

    innerHTML;
    alias;
    private sub: any;
    constructor(private route: ActivatedRoute, private AJAXService: AJAXService,private LoadScriptService: LoadScriptService) {}

     @ViewChild('newsWrap') newsWrap: ElementRef;

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.alias = params['id'];
          this.AJAXService.getData().then((data) => {
              let dataJSON = data.json();
              this.innerHTML = this.AJAXService.getSingleArticle(dataJSON, this.alias);
              document.querySelector('title').textContent = this.AJAXService.getSingleArticle(dataJSON, this.alias)[0].title;
              this.innerHTML = this.innerHTML[0].introtext;
              this.newsWrap.nativeElement.innerHTML = this.innerHTML;
          })

      });
  }

    ngAfterViewChecked() {
        let divs = document.querySelectorAll('.inner-page');

        if (divs.length > 0) {
            this.LoadScriptService.initializeScript();
        }

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.LoadScriptService.removeScript();
    }

}
