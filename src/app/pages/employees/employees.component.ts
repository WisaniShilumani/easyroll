import { Component, OnInit } from '@angular/core';
import { payslips } from '@mocks/payslips'
import { employees } from '@mocks/employees'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from '@store/store.interface'
import { EmployeesLoaded } from '@store/actions/employees.actions'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  payslips = payslips
  employees = employees
  searchString: string = ''
  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new EmployeesLoaded(employees))
  }

  viewEmployee(id: number) {
    this.router.navigateByUrl(`/admin/employee/${id}`)
  }

  updateSearchString(searchString) {
    this.searchString = searchString
  }

}
