import { Component, OnInit } from '@angular/core';
import {AJAXService} from '../services/ajax.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  menuLinks;

  constructor(private AJAXService: AJAXService) { }



  ngOnInit() {
    this.AJAXService.getMenuItems().then((links)=> {
      this.menuLinks = this.AJAXService.getLinks(links.json()).filter((link)=>link.title != 'Главная')
          .sort((a,b)=> a.rgt - b.rgt);
    })
  }

}
