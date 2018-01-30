import {Injectable} from '@angular/core';
import {Track} from './track';

@Injectable()
export class TrackListService {

  tracks = [];

  constructor() {
  }

  add(track: Track) {
    if (this.tracks.length < 10) {
      this.tracks.push(track);
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
