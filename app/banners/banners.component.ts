import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import {AJAXService} from '../services/ajax.service';
import {ModuleSortService} from '../services/module-sort.service'

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  bannersData;
  bannerObjectData;
  constructor(private AJAXService: AJAXService, private ModuleSortService: ModuleSortService ) { }

  ngOnInit() {
    this.AJAXService.getModules().then((data) => {
      this.bannersData = JSON.parse(this.AJAXService.getModule(data.json(),97)[0].params);
      this.bannerObjectData = this.ModuleSortService.sortInfo(this.bannersData, ['img', 'banner_descr', 'banner_link', 'banner_title' ]);



    })
  }

}
