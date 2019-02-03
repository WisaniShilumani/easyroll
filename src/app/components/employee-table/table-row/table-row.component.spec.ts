import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { TableRowComponent } from './table-row.component'
import { employees } from '@mocks/employees'

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
})
