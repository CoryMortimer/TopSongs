import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseComponent } from './browse.component';
import { BrowseService } from './browse.service';
import { SongData } from '../data_and_interfaces/song-data';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  const mockGetTrendingSongs = [SongData[0]];
  const mockGetJustAddedSongs = [SongData[1]];
  let browseService: BrowseService;

  class MockBrowseService {
    getTrendingSongs() {
      return mockGetTrendingSongs;
    }

    getJustAddedSongs() {
      return mockGetJustAddedSongs;
    }

    getMatchingSongs() {
      return mockGetTrendingSongs;
    }

    sortByOption(songs, option) {
      return songs;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseComponent ],
      providers: [ {provide: BrowseService, useClass: MockBrowseService} ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    browseService = fixture.debugElement.injector.get(BrowseService);
  });

  it('should have trending and justAdded populatd', () => {
    expect(component.trending).toEqual(mockGetTrendingSongs);
    expect(component.justAdded).toEqual(mockGetJustAddedSongs);
  });

  it('should call searchSongs without an input and have isSearching set to false', () => {
    component.searchSongs('');
    expect(component.isSearching).toBe(false);
  });

  it('should call searchSongs with an input and have isSearching set to true', () => {
    component.searchSongs('test');
    expect(component.isSearching).toBe(true);
    expect(component.searchedSongs).toEqual(mockGetTrendingSongs);
  });

  it('should call softSongs and call the service 3 times', () => {
    const sortByOptionSpy = spyOn(browseService, 'sortByOption');
    component.sortSongs(0);
    expect(sortByOptionSpy).toHaveBeenCalledTimes(3);
  });
});
