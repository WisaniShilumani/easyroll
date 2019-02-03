import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayslipDialogComponent } from './create-payslip-dialog.component';

describe('CreatePayslipDialogComponent', () => {
  let component: CreatePayslipDialogComponent;
  let fixture: ComponentFixture<CreatePayslipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePayslipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayslipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
