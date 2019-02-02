import { Component, OnInit } from '@angular/core';
import { payslips } from '@mocks/payslips'
import { employees } from '@mocks/employees'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
