import { Injectable } from '@angular/core';

import { SongData } from '../data_and_interfaces/song-data';
import { Song } from '../data_and_interfaces/song.interface';

@Injectable()
export class BrowseService {

  constructor() { }

  getTrendingSongs(): Song[] {
    return [SongData[0], SongData[1]];
  }

  getJustAddedSongs(): Song[] {
    const justAddedSongs = [];
    for (let i = 2; i < SongData.length; i++) {
      justAddedSongs.push(SongData[i]);
    }
    return justAddedSongs;
  }

  getMatchingSongs(searchQuery: string, songs: Song[]): Song[] {
    const matchedSongs = [];
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      if (this.isStringInCaseInsensitiveString(song.title, searchQuery) || song.artist && this.isStringInCaseInsensitiveString(song.artist.name, searchQuery)) {
        matchedSongs.push(song);
      }
    }
    return matchedSongs;
  }

  private isStringInCaseInsensitiveString(s: string, stringToFind: string): boolean {
    return s.toLowerCase().indexOf(stringToFind.toLowerCase()) > -1;
  }

  sortByOption(songs: Song[], option: string): Song[] {
    if (option.toLowerCase() === 'newest') {
      return songs.sort((a, b) => {
        return (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime();
      });
    } else if (option.toLowerCase() == 'easiest') {
      return songs.sort((a, b) => {
        return a.difficultyId - b.difficultyId;
      });
    } else if (option.toLowerCase() == 'hardest') {
      return songs.sort((a, b) => {
        return b.difficultyId - a.difficultyId;
      });
    }
    return songs;
  }
}
