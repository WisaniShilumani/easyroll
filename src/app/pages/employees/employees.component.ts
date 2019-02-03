import { Component, OnInit } from '@angular/core'
import { switchMap } from 'rxjs/operators'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from '@store/store.interface'
import { EmployeesLoaded } from '@store/actions/employees.actions'
import { Employee } from '@models/employee.model'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[]
  searchString: string = ''
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    const { employees } = this.route.snapshot.data
    this.store.dispatch(new EmployeesLoaded(employees))
    this.store.select('employees').subscribe(employees => {
      this.employees = employees
    })
  }

  viewEmployee(id: number) {
    this.router.navigateByUrl(`/admin/employee/${id}`)
  }

  updateSearchString(searchString) {
    this.searchString = searchString
  }
}
