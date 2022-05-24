/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IslemdComponent } from './islemd.component';

describe('IslemdComponent', () => {
  let component: IslemdComponent;
  let fixture: ComponentFixture<IslemdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslemdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslemdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
