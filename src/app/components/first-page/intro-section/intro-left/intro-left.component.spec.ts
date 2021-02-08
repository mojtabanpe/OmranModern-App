/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntroLeftComponent } from './intro-left.component';

describe('IntroLeftComponent', () => {
  let component: IntroLeftComponent;
  let fixture: ComponentFixture<IntroLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
