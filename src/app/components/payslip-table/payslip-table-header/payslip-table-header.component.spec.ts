import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipTableHeaderComponent } from './payslip-table-header.component';

describe('PayslipTableHeaderComponent', () => {
  let component: PayslipTableHeaderComponent;
  let fixture: ComponentFixture<PayslipTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
