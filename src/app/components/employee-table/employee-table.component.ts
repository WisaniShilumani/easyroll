import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Employee } from '@models/employee.model'
@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  @Input() employees: Employee[] = []
  @Input() searchString: string
  @Output() viewEmployee = new EventEmitter()
  constructor() { }

  get employees$ () {
    if (this.searchString && this.searchString.length) {
      return this.employees.filter(employee => {
        if (!isNaN(+this.searchString)) {
          return employee.id === +this.searchString
        }

        return `${employee.firstName} ${employee.lastName}`
          .toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1
      })
    }

    return this.employees
  }

  viewEmployeeDetails (id: number) {
    this.viewEmployee.emit(id)
  }

}
