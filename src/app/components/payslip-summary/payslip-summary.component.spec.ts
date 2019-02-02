import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipSummaryComponent } from './payslip-summary.component';

describe('PayslipSummaryComponent', () => {
  let component: PayslipSummaryComponent;
  let fixture: ComponentFixture<PayslipSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
