import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ml2Component } from './ml2.component';

describe('Ml2Component', () => {
  let component: Ml2Component;
  let fixture: ComponentFixture<Ml2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ml2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ml2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
