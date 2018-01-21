import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FilterOptionsComponent } from './filter-options.component';
import { FilterService } from '../filter.service';

describe('FilterOptionsComponent', () => {
  let component: FilterOptionsComponent;
  let fixture: ComponentFixture<FilterOptionsComponent>;
  let filterServiceSpy: jasmine.Spy;
  let filterItems: DebugElement[];
  let closeButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOptionsComponent ],
      providers: [ {provide: FilterService, useValue: {closeComponent: () => true}} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsComponent);
    component = fixture.componentInstance;
    component.filterOptions = ['a', 'b', 'c'];
    fixture.detectChanges();
    const filterService = fixture.debugElement.injector.get(FilterService);
    filterServiceSpy = spyOn(filterService, 'closeComponent');
    filterItems = fixture.debugElement.queryAll(By.css('li'));
    closeButton = fixture.debugElement.query(By.css('button'));
  });

  it('should select the second element', () => {
    expect(component.selected).toBe(0);
    filterItems[1].nativeElement.click();
    expect(component.selected).toBe(1);
  });

  it('should close itself', () => {
    expect(filterServiceSpy).not.toHaveBeenCalled();
    closeButton.nativeElement.click();
    expect(filterServiceSpy).toHaveBeenCalled();
  });
});
