import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { payslipTableComponents } from '../../test.imports/components.list'
import { PayslipTableComponent } from './payslip-table.component'
import { pipes } from '../../test.imports/pipes.list'
import { modules, MatModules } from '../../test.imports/modules.list'
describe('PayslipTableComponent', () => {
  let component: PayslipTableComponent
  let fixture: ComponentFixture<PayslipTableComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...MatModules,
        ...modules
      ],
      declarations: [
        ...payslipTableComponents,
        ...pipes
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
