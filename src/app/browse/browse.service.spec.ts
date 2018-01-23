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

  it('should return the first two songs for getTrendingSongs', () => {
    expect(service.getTrendingSongs()).toEqual([SongData[0], SongData[1]]);
  });

  it('should return 2-the rest of the songs for for getJustAddedSongs', () => {
    const trendingIndicies = [];
    for (let i = 2; i < SongData.length; i++) {
      trendingIndicies.push(SongData[i]);
    }
    expect(service.getJustAddedSongs()).toEqual(trendingIndicies);
  });

  it('should return [0] if only the first song matches', () => {
    const mockSong = {title: 'test'};
    const result = service.getMatchingSongs('st', <any>[mockSong]);
    expect(result).toEqual(<any>[mockSong]);
  });

  it('should return [] for a song that doesn\'t match', () => {
    const mockSong = {title: 'test'};
    const result = service.getMatchingSongs('tt', <any>[mockSong]);
    expect(result).toEqual([]);
  });

  it('should return [1] for a song that matches the artist name', () => {
    const mockSongs = [{title: 'test'}, {title: 'no', artist: {name: 'MaTcH'}}];
    const result = service.getMatchingSongs('mAtCh', <any>mockSongs);
    expect(result).toEqual(<any>[mockSongs[1]]);
  });

  it('should sort songs newest to oldest', () => {
    const oldSong = {createdAt: '2015-12-02T18:08:26.103Z'};
    const newSong = {createdAt: '2017-12-02T18:08:26.103Z'};
    const mockSongs = [oldSong, newSong];
    const result = service.sortByOption(<any>mockSongs, 'NEwEst');
    expect(result).toEqual(<any>[newSong, oldSong]);
  });

  it('should sort songs easiest to hardest', () => {
    const easySong = {difficultyId: 1};
    const mediumSong = {difficultyId: 2};
    const hardSong = {difficultyId: 3};
    const mockSongs = [mediumSong, hardSong, easySong];
    const result = service.sortByOption(<any>mockSongs, 'EaSIEst');
    expect(result).toEqual(<any>[easySong, mediumSong, hardSong]);
  });

  it('should sort songs hardest to easiest', () => {
    const easySong = {difficultyId: 1};
    const mediumSong = {difficultyId: 2};
    const hardSong = {difficultyId: 3};
    const mockSongs = [mediumSong, easySong, hardSong];
    const result = service.sortByOption(<any>mockSongs, 'HArdeSt');
    expect(result).toEqual(<any>[hardSong, mediumSong, easySong]);
  });

  it('should just return the array if invalid option', () => {
    const easySong = {difficultyId: 1};
    const mediumSong = {difficultyId: 2};
    const hardSong = {difficultyId: 3};
    const mockSongs = [mediumSong, easySong, hardSong];
    const result = service.sortByOption(<any>mockSongs, 'iNvaLid');
    expect(result).toEqual(<any>[mediumSong, easySong, hardSong]);
  });
});
