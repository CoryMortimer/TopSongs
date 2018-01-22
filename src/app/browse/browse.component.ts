import { Component, OnInit } from '@angular/core';

import { BrowseService } from './browse.service';
import { Song } from '../data_and_interfaces/song.interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  filterOptions = ['Newest', 'Easiest', 'Hardest'];
  allSongs: Song[];
  trending: number[];
  justAdded: number[];

  constructor(private browseService: BrowseService) { }

  ngOnInit() {
    this.allSongs = this.browseService.getAllSongs();
    this.trending = this.browseService.getTrendingIndicies();
    this.justAdded = this.browseService.getJustAddedIndicies();
  }
}
