import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipRowComponent } from './payslip-row.component';

describe('PayslipRowComponent', () => {
  let component: PayslipRowComponent;
  let fixture: ComponentFixture<PayslipRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
