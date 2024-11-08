import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YstarComponent } from './ystar.component';

describe('YstarComponent', () => {
  let component: YstarComponent;
  let fixture: ComponentFixture<YstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YstarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
