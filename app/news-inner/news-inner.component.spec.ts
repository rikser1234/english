/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsInnerComponent } from './news-inner.component';

describe('NewsInnerComponent', () => {
  let component: NewsInnerComponent;
  let fixture: ComponentFixture<NewsInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
