import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { EmployeeDetailsComponent } from './employee-details.component'
import { navComponents, payslipTableComponents } from '../../test.imports/components.list'
import { modules, MatModules } from '../../test.imports/modules.list'
import { pipes } from '../../test.imports/pipes.list'
import { employees } from '@mocks/employees'
describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent
  let fixture: ComponentFixture<EmployeeDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeDetailsComponent,
        ...navComponents,
        ...payslipTableComponents,
        ...pipes
      ],
      imports: [
        ...modules,
        ...MatModules
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent)
    component = fixture.componentInstance
    component.employee = employees[0]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
