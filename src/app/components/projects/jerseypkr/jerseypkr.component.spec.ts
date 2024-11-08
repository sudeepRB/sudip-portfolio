import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseypkrComponent } from './jerseypkr.component';

describe('JerseypkrComponent', () => {
  let component: JerseypkrComponent;
  let fixture: ComponentFixture<JerseypkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JerseypkrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JerseypkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
