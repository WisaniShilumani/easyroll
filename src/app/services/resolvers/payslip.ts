import { Injectable } from '@angular/core'
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import { Observable, of, EMPTY, combineLatest } from 'rxjs'
import { take } from 'rxjs/operators'
import { Store, select } from '@ngrx/store'
import { AppState } from '@store/store.interface'
import { getEmployee } from '@store/selectors'
import { Payslip } from '@models/payslip.model'
import { payslips } from '@mocks/payslips'
import { DataService } from '../api/data.service'
@Injectable({
  providedIn: 'root',
})
export class PayslipResolverService implements Resolve<any> {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private api: DataService
  ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const employeeId = route.paramMap.get('id')

    const payslips = this.api.getPayslips(+employeeId)
    const employee = this.store.pipe(
      select(getEmployee(+employeeId)))
    
    return combineLatest(
      payslips,
      employee
    ).pipe(
      take(1)
    )
  }

  getPayslips (employeeId: string): Payslip[] {
    return payslips.filter(payslip => payslip.employeeId === +employeeId)
  }
}
