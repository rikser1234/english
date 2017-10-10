/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntensivComponent } from './intensiv.component';

describe('IntensivComponent', () => {
  let component: IntensivComponent;
  let fixture: ComponentFixture<IntensivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
