import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { SongData } from '../data_and_interfaces/song-data';
import { SecondsToDurationPipe } from '../shared/seconds-to-duration.pipe';

describe('CardComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let artistName: string;
  let songName: string;
  let valueElements: DebugElement[];
  @Component({
    template: `<app-card [songData]="song"></app-card>`
  })
  class TestComponent {
    song = SongData[0];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, CardComponent, SecondsToDurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    artistName = fixture.debugElement.query(By.css('.artist-name')).nativeElement.innerText;
    songName = fixture.debugElement.query(By.css('.song-name')).nativeElement.innerText;
    valueElements = fixture.debugElement.queryAll(By.css('.value'));
  });

  it('should display all the fields', () => {
    const difficulty = valueElements[0].nativeElement.innerText;
    const genre = valueElements[1].nativeElement.innerText;
    const length = valueElements[2].nativeElement.innerText;
    expect(artistName).toBe('Miley Cyrus');
    expect(songName).toBe('Wrecking Ball');
    expect(difficulty).toBe('Medium');
    expect(genre).toBe('Pop');
    expect(length).toBe('3:34');
  });

  it('should put question marks if a song does not have a total time', () => {
    const mockSong = {
      artist: {
        name: 'Test name'
      },
      title: 'Test title',
      difficulty: 'Test difficulty',
      smallThumb: {url: ''}
    };
    const cardComponentFixture = TestBed.createComponent(CardComponent);
    let cardComponent = cardComponentFixture.componentInstance;
    cardComponent.songData = <any>mockSong;
    cardComponentFixture.detectChanges();
    expect<any>(cardComponent.songData.metaData).toEqual({totalTime: '???'});
  });
});
