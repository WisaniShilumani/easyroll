import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { pipes } from '../../test.imports/pipes.list'
import { PayslipSummaryComponent } from './payslip-summary.component'
import { payslips } from '@mocks/payslips'
import { employees } from '@mocks/employees'
import { calculateIncome } from '@utils/income/incomeCalculator'
describe('PayslipSummaryComponent', () => {
  let component: PayslipSummaryComponent
  let fixture: ComponentFixture<PayslipSummaryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PayslipSummaryComponent,
        ...pipes
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipSummaryComponent)
    component = fixture.componentInstance
    component.summary = {
      ...calculateIncome(employees[0].annualIncome, employees[0].pensionContribution),
      period: payslips[0].period
    }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
