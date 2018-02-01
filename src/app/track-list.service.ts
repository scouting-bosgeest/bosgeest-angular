import {Injectable} from '@angular/core';
import {Track} from './track';
import {UserInfo} from './user-info';

@Injectable()
export class TrackListService {

  tracks = [];

  constructor() {
  }

  isSubmittable(): boolean {
    return this.tracks.length === 10;
  }

  submit(userInfo: UserInfo): boolean {
    if (this.isSubmittable()) {
      console.log('Submitting:', userInfo, this.tracks);
      this.tracks = [];
      return true;
    }
    return false;
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
