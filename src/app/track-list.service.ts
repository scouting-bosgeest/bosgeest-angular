import {Injectable} from '@angular/core';
import {Track} from './track';

@Injectable()
export class TrackListService {

  tracks = [];
  private frozen = false;

  constructor() {
  }

  isFrozen(): boolean {
    return this.frozen;
  }

  submit(): boolean {
    if (this.tracks.length === 10) {
      this.frozen = true;
      console.log('Submitting:', this.tracks);
      return true;
    }
    return false;
  }

  add(newTrack: Track) {
    if (this.tracks.length < 10) {
      const filtered = this.tracks.filter(track => track.artist === newTrack.artist && track.title === newTrack.title);
      if (filtered.length === 0) {
        this.tracks.push(newTrack);
        console.log(this.tracks);
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
