import { Injectable } from '@angular/core';

@Injectable()
export class ModuleSortService {

  constructor() { }

  sortInfo(data, keysArr) {

    let keys = [];

    for (let key in data) {
      if (key.indexOf('img') > -1) {
        keys.push(data[key]);
      }
    }

    let totalNumber = keys.filter((key)=> key !='' ).length;

    let objects = [];
    for (let i = 0; i < totalNumber; i++) {
      objects.push({});
    }
    for (let key in data) {
      let keyNumber = parseInt(key[key.length - 1]) - 1;
      if (objects[keyNumber]) {
        for (let keyarr of keysArr) {
          if (key.indexOf(keyarr) > -1) {
            objects[keyNumber][keyarr] = data[key]
          }
        }

      }
    }


    return objects;


  }



}
