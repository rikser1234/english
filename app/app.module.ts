import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import {AJAXService} from './ajax.service';
import { NewsNavigationComponent } from './news-navigation/news-navigation.component';
import { NewsInnerComponent } from './news-inner/news-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsNavigationComponent,
    NewsInnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
          { path: "novosti", component: NewsNavigationComponent },
          { path: "novosti/:id", component:NewsInnerComponent },

      ])
  ],
  providers: [AJAXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
