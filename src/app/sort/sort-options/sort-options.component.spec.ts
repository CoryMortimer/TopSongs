import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SortOptionsComponent } from './sort-options.component';
import { SortService } from '../sort.service';

describe('SortOptionsComponent', () => {
  let component: SortOptionsComponent;
  let fixture: ComponentFixture<SortOptionsComponent>;
  let sortServiceSpy: jasmine.Spy;
  let sortItems: DebugElement[];
  let closeButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortOptionsComponent ],
      providers: [ {provide: SortService, useValue: {closeComponent: () => true}} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOptionsComponent);
    component = fixture.componentInstance;
    component.sortOptions = ['a', 'b', 'c'];
    fixture.detectChanges();
    const sortService = fixture.debugElement.injector.get(SortService);
    sortServiceSpy = spyOn(sortService, 'closeComponent');
    sortItems = fixture.debugElement.queryAll(By.css('li'));
    closeButton = fixture.debugElement.query(By.css('button'));
  });

  it('should select the second element', () => {
    expect(component.selected).toBe(0);
    sortItems[1].nativeElement.click();
    expect(component.selected).toBe(1);
  });

  it('should close itself', () => {
    expect(sortServiceSpy).not.toHaveBeenCalled();
    closeButton.nativeElement.click();
    expect(sortServiceSpy).toHaveBeenCalled();
  });
});
