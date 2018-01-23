import { Component, Input } from '@angular/core';
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

import { SortService } from './sort.service';

describe('SortService', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: SortService;
  @Component({
    template: `<div>Main test component</div>`
  })
  class TestComponent {}

  @Component({
    template: `<h1 id="injected-title">{{title}}</h1>`
  })
  class TestEntryComponent {
    @Input() title;
  }

  function getInjectedTitle() {
    return document.getElementById('injected-title');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TestEntryComponent],
      providers: [SortService]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [TestEntryComponent]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(SortService);
  });

  it('should error trying to close nothing that is opened', () => {
    expect(() => service.closeComponent('test')).toThrowError();
  });

  it('should inject the TestEntryComponent into TestComponent', () => {
    const injectedTitleText = 'Test injected title';
    let injectedTitle = getInjectedTitle();
    expect(injectedTitle).toBe(null);
    service.openComponent(TestEntryComponent, {title: injectedTitleText});
    fixture.detectChanges();
    injectedTitle = getInjectedTitle();
    expect(injectedTitle.innerText).toBe(injectedTitleText);
  });

  it('should error trying to open twice', () => {
    const injectedTitleText = 'Test injected title';
    service.openComponent(TestEntryComponent, {title: injectedTitleText});
    expect(() => service.openComponent(TestEntryComponent, {title: injectedTitleText})).toThrow();
  });
});
