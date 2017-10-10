import { Injectable } from '@angular/core';

@Injectable()
export class LoadScriptService {

  constructor() { }


  url = 'http://myperfectenglish.ru/templates/myperfcetenglish/js/init.js';

  loadAPI: Promise<any>;

  initializeScript() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
    });
  }

  loadScript() {
    let node = document.createElement('script');
    node.className = 'script';
    if (!document.querySelector('.script')) {
      node.src = this.url;
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }

  }

  removeScript() {
    if (document.querySelector('.script')) {
      document.querySelector('.script').parentNode.removeChild(document.querySelector('.script'));
    }

  }


}
