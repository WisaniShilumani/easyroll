import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { pipes } from '../../test.imports/pipes.list'
import { PayslipSummaryComponent } from './payslip-summary.component'
import { payslips } from '@mocks/payslips'
import { employees } from '@mocks/employees'
import { calculateIncome } from '@utils/income/incomeCalculator'
import * as moment from 'moment'
describe('PayslipSummaryComponent', () => {
  let component: PayslipSummaryComponent
  let fixture: ComponentFixture<PayslipSummaryComponent>
  let compiled
  let columns
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

    compiled = fixture.debugElement.nativeElement
    columns = compiled.querySelectorAll('.row div')
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the period column appropriately', () => {
    const firstTextContent: string = columns[0].textContent
    expect(firstTextContent).toContain(' - ')
    const [ date1, date2 ] = firstTextContent.split(' - ')
    expect(moment(date1).format('DD MMMM')).toEqual(moment(payslips[0].period).format('DD MMMM'))
    expect(date2).toBeTruthy()
  })

  it('should render the gross income', () => {
    expect(columns[1].textContent).toEqual(
      'R ' + component.thousands(Math.round(employees[0].annualIncome / 12))
    )
  })

  it('should render the income tax in rands', () => {
    expect(columns[2].textContent).toContain('R ')
    expect(columns[2].textContent.replace('R ', '')).not.toBeNaN()
  })

  it('should render the net income in rands', () => {
    expect(columns[3].textContent).toContain('R ')
    expect(columns[3].textContent.replace('R ', '')).not.toBeNaN()
  })

  it('should render the pension contribution in rands', () => {
    expect(columns[4].textContent).toContain('R ')
    expect(columns[4].textContent.replace('R ', '')).not.toBeNaN()
  })
})
