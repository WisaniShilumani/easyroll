import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Payslip } from '@models/payslip.model'
import { Employee } from '@models/employee.model'
import { Store } from '@ngrx/store'
import { AppState } from '@store/store.interface'
import { DataService } from '../../services/api/data.service'
import { CurrentEmployeeLoaded } from '@store/actions/current-employee.actions'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  payslips: Payslip[]
  employee: Employee
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private api: DataService
  ) { }

  ngOnInit() {
    const { employeeData } = this.route.snapshot.data

    this.store.dispatch(new CurrentEmployeeLoaded({
      payslips: employeeData[0],
      employee: employeeData[1]
    }))

    this.store.select('currentEmployee').subscribe(currentEmployee => {
      this.employee = currentEmployee.employee
      this.payslips = currentEmployee.payslips
    })
  }

  get displayName () {
    return `${this.employee.firstName} ${this.employee.lastName}`
  }

  deletePayslip (id) {
    this.api.deletePayslip(id)
  }
}
