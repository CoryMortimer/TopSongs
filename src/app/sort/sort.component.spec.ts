import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

import { SortComponent } from './sort.component';
import { SortService } from './sort.service';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;
  let sortServiceSpy: jasmine.Spy;
  let openElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortComponent ],
      providers: [ {provide: SortService, useValue: {openComponent: () => true}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const sortService = fixture.debugElement.injector.get(SortService);
    sortServiceSpy = spyOn(sortService, 'openComponent').and.returnValue(Observable.of(2));
    openElement = fixture.debugElement.queryAll(By.css('span'))[1];
  });

  it('should open another component', () => {
    component.optionSelected.subscribe(d => expect(d).toBe(2));
    expect(component.option).toBe(0);
    expect(sortServiceSpy).not.toHaveBeenCalled();
    openElement.nativeElement.click();
    expect(sortServiceSpy).toHaveBeenCalled();
    expect(component.option).toBe(2);
  });
});
