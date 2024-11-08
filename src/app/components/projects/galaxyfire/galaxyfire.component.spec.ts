import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyfireComponent } from './galaxyfire.component';

describe('GalaxyfireComponent', () => {
  let component: GalaxyfireComponent;
  let fixture: ComponentFixture<GalaxyfireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaxyfireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaxyfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
