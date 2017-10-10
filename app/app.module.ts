import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from "@angular/router";
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';


import { AppComponent } from './app.component';
import {AJAXService} from './services/ajax.service';
import {LoadScriptService} from './services/load-script.service';
import {ModuleSortService} from './services/module-sort.service'
import { NewsNavigationComponent } from './news-navigation/news-navigation.component';
import { NewsInnerComponent } from './news-inner/news-inner.component';
import { ResponsesComponent } from './responses/responses.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { BannersComponent } from './banners/banners.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IntensivComponent } from './intensiv/intensiv.component';
import { SchoolComponent } from './school/school.component';
import { UslugiComponent } from './uslugi/uslugi.component';
import { PrepodavatelComponent } from './prepodavatel/prepodavatel.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsNavigationComponent,
    NewsInnerComponent,
    ResponsesComponent,
    MainmenuComponent,
    BannersComponent,
    EscapeHtmlPipe,
    MainpageComponent,
    IntensivComponent,
    SchoolComponent,
    UslugiComponent,
    PrepodavatelComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
          { path: "novosti", component: NewsNavigationComponent },
          { path: "novosti/:id", component:NewsInnerComponent },
        {path: 'usugi', component: UslugiComponent},
        {path: 'usugi#:id', component: UslugiComponent},
        {path: 'otzyvy', component:ResponsesComponent},
        {path: 'angliiskii-intensiv', component:IntensivComponent },
        {path: 'school', component: SchoolComponent},
        {path: 'o-prepodavatele', component: PrepodavatelComponent},
        {path: 'contacty', component: ContactsComponent},
        {path: '', component:MainpageComponent}

      ])
  ],
  providers: [AJAXService, LoadScriptService, ModuleSortService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
