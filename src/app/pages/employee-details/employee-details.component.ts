import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Payslip } from '@models/payslip.model'
import { Employee } from '@models/employee.model'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  payslips: Payslip[]
  employee: Employee
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const { employeeData } = this.route.snapshot.data
    this.payslips = employeeData[0]
    this.employee = employeeData[1]
  }

  get displayName () {
    return `${this.employee.firstName} ${this.employee.lastName}`
  }
}
