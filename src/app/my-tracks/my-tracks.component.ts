import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../track';
import {TrackListService} from '../track-list.service';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.css']
})
export class MyTracksComponent implements OnInit {

  constructor(public trackListService: TrackListService) { }


  ngOnInit() {
  }

}
