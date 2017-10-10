/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UslugiComponent } from './uslugi.component';

describe('UslugiComponent', () => {
  let component: UslugiComponent;
  let fixture: ComponentFixture<UslugiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UslugiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UslugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
