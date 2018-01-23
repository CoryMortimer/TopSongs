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
  trending: Song[];
  justAdded: Song[];
  searchedSongs = [];
  isSearching = false;

  constructor(private browseService: BrowseService) { }

  ngOnInit() {
    this.trending = this.browseService.getTrendingSongs();
    this.justAdded = this.browseService.getJustAddedSongs();
    this.sortSongs(0);
  }

  searchSongs(searchQuery: string): void {
    if (!searchQuery) {
      this.isSearching = false;
      return;
    }
    this.isSearching = true;
    const allSongs = this.trending.concat(this.justAdded);
    this.searchedSongs = this.browseService.getMatchingSongs(searchQuery, allSongs);
  }

  sortSongs(sortIndex: number) {
    const sortOption = this.sortOptions[sortIndex];
    this.trending = this.browseService.sortByOption(this.trending, sortOption);
    this.justAdded = this.browseService.sortByOption(this.justAdded, sortOption);
    this.searchedSongs = this.browseService.sortByOption(this.searchedSongs, sortOption);
  }
}
