import {Component, OnInit, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {SearchService} from '../search.service';
import {Track} from '../track';
import {TrackListService} from '../track-list.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  modalRef: BsModalRef;
  tracks$: Observable<any>;
  constructor(private searchService: SearchService, public trackListService: TrackListService, private modalService: BsModalService) { }

  search(query: string): void {
    this.searchTerms.next(query);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  addTrack(artist: string, title: string) {
      const track = new Track();
      track.artist = artist;
      track.title = title;
      this.trackListService.add(track);
      this.modalRef.hide();
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
