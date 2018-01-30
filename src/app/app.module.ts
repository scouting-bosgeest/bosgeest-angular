import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MyTracksComponent } from './my-tracks/my-tracks.component';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';
import {TrackListService} from './track-list.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MyTracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SearchService, TrackListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
