import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { modules, MatModules } from '../../../test.imports/modules.list'
import { PayslipTableHeaderComponent } from './payslip-table-header.component'

describe('PayslipTableHeaderComponent', () => {
  let component: PayslipTableHeaderComponent
  let fixture: ComponentFixture<PayslipTableHeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...modules,
        ...MatModules
      ],
      declarations: [ PayslipTableHeaderComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipTableHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
