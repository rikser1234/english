/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrepodavatelComponent } from './prepodavatel.component';

describe('PrepodavatelComponent', () => {
  let component: PrepodavatelComponent;
  let fixture: ComponentFixture<PrepodavatelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepodavatelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepodavatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
