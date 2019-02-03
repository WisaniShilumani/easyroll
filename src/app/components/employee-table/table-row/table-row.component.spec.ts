import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { TableRowComponent } from './table-row.component'
import { employees } from '@mocks/employees'
import * as moment from 'moment'

describe('TableRowComponent', () => {
  let component: TableRowComponent
  let fixture: ComponentFixture<TableRowComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowComponent)
    component = fixture.componentInstance
    component.employee = employees[0]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the employee row columns', () => {
    const compiled = fixture.debugElement.nativeElement
    const columns = compiled.querySelectorAll('.table-row-container div')
    expect(columns[0].textContent).toContain(employees[0].id)
    expect(columns[1].textContent).toContain(employees[0].firstName)
    expect(columns[2].textContent).toContain(employees[0].lastName)
    expect(columns[3].textContent).toContain(
      'R ' + component.thousands(employees[0].annualIncome)
    )
    expect(columns[4].textContent).toContain(employees[0].pensionContribution + '%')
    expect(columns[5].textContent).toContain(
      moment(employees[0].paymentDate).format('MMM D, YYYY')
    )
  })
})
