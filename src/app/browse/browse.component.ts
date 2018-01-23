import { Component, OnInit } from '@angular/core';

import { BrowseService } from './browse.service';
import { Song } from '../data_and_interfaces/song.interface';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  sortOptions = ['Newest', 'Easiest', 'Hardest'];
  allSongs: Song[];
  trending: number[];
  justAdded: number[];
  searchedSongs: number[];
  isSearching = false;

  constructor(private browseService: BrowseService) { }

  ngOnInit() {
    this.allSongs = this.browseService.getAllSongs();
    this.trending = this.browseService.getTrendingIndicies();
    this.justAdded = this.browseService.getJustAddedIndicies();
  }

  searchSongs(searchQuery: string) {
    if (!searchQuery) {
      this.isSearching = false;
      return;
    }
    this.isSearching = true;
    this.searchedSongs = this.browseService.getMatchingSongIndicies(searchQuery, this.allSongs);
  }
}
