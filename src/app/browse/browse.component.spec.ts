import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseComponent } from './browse.component';
import { BrowseService } from './browse.service';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  const mockGetAllSongsValue = [{}, {}];
  const mockGetTrendingIndicies = [0];
  const mockGetJustAddedIndicies = [1];

  class MockBrowseService {
    getAllSongs() {
      return mockGetAllSongsValue;
    }

    getTrendingIndicies() {
      return mockGetTrendingIndicies;
    }

    getJustAddedIndicies() {
      return mockGetJustAddedIndicies;
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
  });

  it('should have allSongs, trending, and justAdded populatd', () => {
    expect(component.allSongs).toEqual(<any>mockGetAllSongsValue);
    expect(component.trending).toEqual(mockGetTrendingIndicies);
    expect(component.justAdded).toEqual(mockGetJustAddedIndicies);
  });
});
