import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotiongraphicsComponent } from './motiongraphics.component';

describe('MotiongraphicsComponent', () => {
  let component: MotiongraphicsComponent;
  let fixture: ComponentFixture<MotiongraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotiongraphicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotiongraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
