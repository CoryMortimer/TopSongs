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
});
