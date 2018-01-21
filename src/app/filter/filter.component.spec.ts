import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

import { FilterComponent } from './filter.component';
import { FilterService } from './filter.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let filterServiceSpy: jasmine.Spy;
  let openElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      providers: [ {provide: FilterService, useValue: {openComponent: () => true}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const filterService = fixture.debugElement.injector.get(FilterService);
    filterServiceSpy = spyOn(filterService, 'openComponent').and.returnValue(Observable.of(2));
    openElement = fixture.debugElement.queryAll(By.css('span'))[1];
  });

  it('should open another component', () => {
    expect(component.option).toBe(0);
    expect(filterServiceSpy).not.toHaveBeenCalled();
    openElement.nativeElement.click();
    expect(filterServiceSpy).toHaveBeenCalled();
    expect(component.option).toBe(2);
  });
});
