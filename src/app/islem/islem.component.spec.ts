/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IslemComponent } from './islem.component';

describe('IslemComponent', () => {
  let component: IslemComponent;
  let fixture: ComponentFixture<IslemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
