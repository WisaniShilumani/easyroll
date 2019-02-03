import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { employeeTableComponents } from '../../test.imports/components.list'
import { EmployeeTableComponent } from './employee-table.component'

describe('EmployeeTableComponent', () => {
  let component: EmployeeTableComponent
  let fixture: ComponentFixture<EmployeeTableComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ...employeeTableComponents
       ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
