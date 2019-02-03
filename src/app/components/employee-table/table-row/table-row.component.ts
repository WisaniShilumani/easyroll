import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { Employee } from '@models/employee.model'
@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() employee: Employee
  @Output() viewEmployee = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  viewEmployeeDetails () {
    this.viewEmployee.emit(this.employee.id)
  }

  thousands (number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
