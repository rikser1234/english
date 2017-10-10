import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AJAXService {

tableUrl = 'http://myperfectenglish.ru/?option=com_jsonexport&table=en4gr_content';
modulesUrl = 'http://myperfectenglish.ru/?option=com_jsonexport&table=en4gr_modules';
menuUrl = 'http://myperfectenglish.ru/?option=com_jsonexport&table=en4gr_menu'


    constructor(private _http: Http) {}
    newsArticles: any;
    data: any;



    getData(){
        return this._http.get(this.tableUrl).toPromise();
    }

    getMenuItems() {
        return this._http.get(this.menuUrl).toPromise();
    }

    getModules() {
        return this._http.get(this.modulesUrl).toPromise();
    }

    getModule(data,id) {
        return this.sortData(data, id, 'id');
    }

    sortData(data, param, field) {
        let sortedData = [];
        for (let article of data) {
            if (!article.module && !article.menutype) {
                if (article[field] == param && article.state == 1) {
                    sortedData.push(article);
                }
            } else {

                if (article[field] == param && !article.menutype) {

                    sortedData.push(article);
                } else if (article[field] == param && article.level == 1 && article.published != 0) {
                    sortedData.push(article);
                }
            }

        }
        return sortedData;
    }

    getLinks(data) {
        return this.sortData(data, 'mainmenu', 'menutype');
    }


    getNewsArticles(data) {
        return this.sortData(data, 9, 'catid');
    }

    getSingleArticle(data, alias) {
        return this.sortData(data, alias, 'alias');
    }

    getArticle(data, id) {
        return this.sortData(data, id, 'id');
    }


}
