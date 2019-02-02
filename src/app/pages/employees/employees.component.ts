import { Component, OnInit } from '@angular/core';
import { payslips } from '@mocks/payslips'
import { employees } from '@mocks/employees'
import { Router } from '@angular/router'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  payslips = payslips
  employees = employees
  searchString: string = ''
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewEmployee(id: number) {
    this.router.navigateByUrl(`/admin/employee/${id}`)
  }

}
