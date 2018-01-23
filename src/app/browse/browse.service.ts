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

  getMatchingSongIndicies(searchQuery: string, songs: Song[]): number[] {
    const songIndicies = [];
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      if (this.isStringInCaseInsensitiveString(song.title, searchQuery) || song.artist && this.isStringInCaseInsensitiveString(song.artist.name, searchQuery)) {
        songIndicies.push(i);
      }
    }
    return songIndicies;
  }

  private isStringInCaseInsensitiveString(s: string, stringToFind: string) {
    return s.toLowerCase().indexOf(stringToFind.toLowerCase()) > -1;
  }
}
