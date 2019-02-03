import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EmployeesComponent } from './employees.component'
import { navComponents, employeeTableComponents } from '../../test.imports/components.list'
import { modules, MatModules } from '../../test.imports/modules.list'
import { pipes } from '../../test.imports/pipes.list'

describe('EmployeesComponent', () => {
  let component: EmployeesComponent
  let fixture: ComponentFixture<EmployeesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeesComponent,
        ...navComponents,
        ...employeeTableComponents,
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
    fixture = TestBed.createComponent(EmployeesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
