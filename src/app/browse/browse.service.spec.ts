import { TestBed, inject } from '@angular/core/testing';

import { BrowseService } from './browse.service';
import { SongData } from '../data_and_interfaces/song-data';

describe('BrowseService', () => {
  let service: BrowseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowseService]
    });
  });

  beforeEach(inject([BrowseService], (browseService: BrowseService) => {
    service = browseService;
  }));

  it('should return SongData when calling getAllSongs', () => {
    expect(service.getAllSongs()).toBe(SongData);
  });

  it('should return [0, 1] for getTrendingIndicies', () => {
    expect(service.getTrendingIndicies()).toEqual([0, 1]);
  });

  it('should return 2-the rest of the songs for for getJustAddedIndicies', () => {
    const trendingIndicies = [];
    for (let i = 2; i < SongData.length; i++) {
      trendingIndicies.push(i);
    }
    expect(service.getJustAddedIndicies()).toEqual(trendingIndicies);
  });

  it('should return [0] if only the first song matches', () => {
    const mockSong = {title: 'test'};
    const result = service.getMatchingSongIndicies('st', <any>[mockSong]);
    expect(result).toEqual([0]);
  });

  it('should return [] for a song that doesn\'t match', () => {
    const mockSong = {title: 'test'};
    const result = service.getMatchingSongIndicies('tt', <any>[mockSong]);
    expect(result).toEqual([]);
  });

  it('should return [1] for a song that matches the artist name', () => {
    const mockSongs = [{title: 'test'}, {title: 'no', artist: {name: 'MaTcH'}}];
    const result = service.getMatchingSongIndicies('mAtCh', <any>mockSongs);
    expect(result).toEqual([1]);
  });
});
