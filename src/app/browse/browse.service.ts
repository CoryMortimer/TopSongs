import { Injectable } from '@angular/core';

import { SongData } from '../data_and_interfaces/song-data';
import { Song } from '../data_and_interfaces/song.interface';

@Injectable()
export class BrowseService {

  constructor() { }

  getAllSongs(): Song[] {
    return SongData;
  }

  getTrendingIndicies(): number[] {
    return [0, 1];
  }

  getJustAddedIndicies(): number[] {
    const trendingIndicies = [];
    for (let i = 2; i < this.getAllSongs().length; i++) {
      trendingIndicies.push(i);
    }
    return trendingIndicies;
  }
}
