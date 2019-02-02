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
 
@Injectable({
  providedIn: 'root',
})
export class PayslipResolverService implements Resolve<any> {
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const employeeId = route.paramMap.get('id')
    const payslips = this.getPayslips(employeeId)
    const employee = this.store.pipe(
      select(getEmployee(+employeeId)))
    if (payslips && payslips.length) {
      return combineLatest(
        of(payslips),
        employee
      ).pipe(
        take(1)
      )
    }

    this.router.navigate(['/admin'])
    return EMPTY
  }

  getPayslips (employeeId: string): Payslip[] {
    return payslips.filter(payslip => payslip.employeeId === +employeeId)
  }
}
