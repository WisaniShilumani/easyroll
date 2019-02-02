import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@models/employee.model'
@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  @Input() employees: Employee[] = []
  constructor() { }

  ngOnInit() {
  }

}
