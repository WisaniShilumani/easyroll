import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import { Observable} from 'rxjs'
import { DataService } from '../api/data.service'
import { Employee } from '@models/employee.model'
 
@Injectable({
  providedIn: 'root',
})
export class EmployeesResolverService implements Resolve<any> {
  constructor(
    private api: DataService
  ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> | Observable<never> {
    return this.api.getEmployees()
  }
}
