import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AJAXService {

tableUrl = 'http://myperfectenglish.ru/?option=com_jsonexport&table=en4gr_content';
modulesUrl = 'http://myperfectenglish.ru/?option=com_jsonexport&table=en4gr_modules';


    constructor(private _http: Http) {}
    newsArticles: any;
    data: any;



    getData(){
        return this._http.get(this.tableUrl).toPromise();
    }

    getModules() {
        return this._http.get(this.modulesUrl).toPromise();
    }

    getModule(data) {
        return this.sortData(data, 98, 'id');
    }

    sortData(data, param, field) {
        let sortedData = [];
        for (let article of data) {
            if (!article.module) {
                if (article[field] == param && article.state == 1) {
                    sortedData.push(article);
                }
            } else {

                if (article[field] == param) {
                    sortedData.push(article);
                }
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
