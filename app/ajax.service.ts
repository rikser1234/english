import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AJAXService {

url = '?option=com_jsonexport&table=en4gr_content';


    constructor(private _http: Http) {}
    newsArticles: any;
    data: any;

    getData(){
        return this._http.get(this.url).toPromise();
    }

    sortData(data, param, field) {
        let sortedData = [];
        for (let article of data) {
            if (article[field] == param && article.state == 1) {
                sortedData.push(article);
            }
        }
        return sortedData;
    }


    getNewsArticles(data) {
        return this.sortData(data, 9, 'catid');
    }

    getSingleArticle(data, alias) {
        return this.sortData(data, alias, 'alias');
    }


}
