import { Component, Input } from '@angular/core';

import { Song } from '../data_and_interfaces/song.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() songData: Song;
}
