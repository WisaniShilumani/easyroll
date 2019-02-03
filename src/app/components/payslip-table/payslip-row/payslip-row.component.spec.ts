import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { pipes } from '../../../test.imports/pipes.list'
import { PayslipRowComponent } from './payslip-row.component'
import { PayslipSummaryComponent } from '../../payslip-summary/payslip-summary.component'
import { payslips } from '@mocks/payslips'
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
})
