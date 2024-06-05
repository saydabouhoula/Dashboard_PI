import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ml2AlcoComponent } from './ml2-alco.component';

describe('Ml2AlcoComponent', () => {
  let component: Ml2AlcoComponent;
  let fixture: ComponentFixture<Ml2AlcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ml2AlcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ml2AlcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
