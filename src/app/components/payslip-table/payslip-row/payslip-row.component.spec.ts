import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { pipes } from '../../../test.imports/pipes.list'
import { PayslipRowComponent } from './payslip-row.component'
import { PayslipSummaryComponent } from '../../payslip-summary/payslip-summary.component'
import { payslips } from '@mocks/payslips'
import * as moment from 'moment'
describe('PayslipRowComponent', () => {
  let component: PayslipRowComponent
  let fixture: ComponentFixture<PayslipRowComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PayslipRowComponent,
        PayslipSummaryComponent,
        ...pipes
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipRowComponent)
    component = fixture.componentInstance
    component.payslip = payslips[0]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the payslip row columns', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement
    const columns = compiled.querySelectorAll('.table-row-container div')
    const firstTextContent: string = columns[0].textContent
    expect(firstTextContent).toContain(' - ')
    const [ date1, date2 ] = firstTextContent.split(' - ')
    expect(moment(date1).format('DD MMMM')).toEqual(moment(payslips[0].paymentDate).format('DD MMMM'))
    expect(date2).toBeTruthy()
  }))
})
