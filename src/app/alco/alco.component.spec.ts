import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoComponent } from './alco.component';

describe('AlcoComponent', () => {
  let component: AlcoComponent;
  let fixture: ComponentFixture<AlcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
