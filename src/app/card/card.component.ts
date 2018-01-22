import { Component, Input, OnInit } from '@angular/core';

import { Song } from '../data_and_interfaces/song.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() songData: Song;

  ngOnInit() {
    if (!this.songData.metaData) {
      this.songData.metaData = <any>{totalTime: '???'};
    }
  }
}
