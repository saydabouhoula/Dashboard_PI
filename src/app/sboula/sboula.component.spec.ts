import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SboulaComponent } from './sboula.component';

describe('SboulaComponent', () => {
  let component: SboulaComponent;
  let fixture: ComponentFixture<SboulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SboulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SboulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
