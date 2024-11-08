import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovebatteryComponent } from './lovebattery.component';

describe('LovebatteryComponent', () => {
  let component: LovebatteryComponent;
  let fixture: ComponentFixture<LovebatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovebatteryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LovebatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
