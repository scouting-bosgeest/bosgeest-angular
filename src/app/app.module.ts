import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MyTracksComponent } from './my-tracks/my-tracks.component';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';


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
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
