import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  tracks$: Observable<any>;

  constructor(private searchService: SearchService) { }

  search(query: string): void {
    this.searchTerms.next(query);
  }

  ngOnInit(): void {
    this.tracks$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((query: string) => this.searchService.searchTracks(query)),
    );
  }

}
