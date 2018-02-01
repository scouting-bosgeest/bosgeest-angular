import {Injectable} from '@angular/core';
import {Track} from './track';
import {UserInfo} from './user-info';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Ballot} from './ballot';
import {catchError, map} from 'rxjs/operators';
import {Result} from './result';
import {mapTo} from 'rxjs/operator/mapTo';

@Injectable()
export class TrackListService {

  tracks = [];

  constructor(private http: HttpClient) {
  }

  isSubmittable(): boolean {
    return this.tracks.length === 10;
  }

  submit(userInfo: UserInfo): Observable<Result> {
    if (this.isSubmittable()) {
      const ballot = new Ballot();
      ballot.voter = userInfo;
      ballot.tracks = this.tracks;
      console.log('Submitting:', ballot);
      return this.http.post<Result>(environment.apiUrl + '/submit', ballot).pipe(
        catchError(err => {
          const result = new Result();
          result.value = 'ERROR';
          result.message = 'Er is een fout opgetreden. Probeer het nog eens.'
          return of(result);
        })
      );
    }

  }

  add(newTrack: Track) {
    if (this.tracks.length < 10) {
      const filtered = this.tracks.filter(track => track.artist === newTrack.artist && track.title === newTrack.title);
      if (filtered.length === 0) {
        this.tracks.push(newTrack);
      }
    }
  }

  remove(track: Track) {
    this.tracks.splice(this.tracks.indexOf(track), 1);
  }

  moveUp(track: Track) {
    const index = this.tracks.indexOf(track);
    if (index > 0) {
      this.tracks.splice(index - 1, 0, this.tracks.splice(index, 1)[0]);
    }
  }

  moveDown(track: Track) {
    const index = this.tracks.indexOf(track);
    if (index < this.tracks.length) {
      this.tracks.splice(index + 1, 0, this.tracks.splice(index, 1)[0]);
    }
  }
}
