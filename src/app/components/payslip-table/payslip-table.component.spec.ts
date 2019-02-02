import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipTableComponent } from './payslip-table.component';

describe('PayslipTableComponent', () => {
  let component: PayslipTableComponent;
  let fixture: ComponentFixture<PayslipTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
