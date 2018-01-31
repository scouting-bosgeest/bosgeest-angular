import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {MyTracksComponent} from './my-tracks/my-tracks.component';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';
import {TrackListService} from './track-list.service';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {EmailValidationService} from './email-validation.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MyTracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [SearchService, TrackListService, EmailValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
