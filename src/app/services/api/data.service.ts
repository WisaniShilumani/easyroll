import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { BaseApiService } from './base-api.service'
import { Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { Observable, of } from 'rxjs'
import { startDateToPeriod } from '@utils/period/startDateToPeriod'
import { employees } from '@mocks/employees'
import { payslips } from '@mocks/payslips'
import { Employee } from '@models/employee.model'
import { Payslip } from '@models/payslip.model'
import { CreatePayslip } from '@models/create-payslip.model'

import { Store } from '@ngrx/store'
import { AppState } from '@store/store.interface'

import { CurrentEmployeeAddPayslip, CurrentEmployeeDeletePayslip } from '@store/actions/current-employee.actions'
@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseApiService {
  constructor(private http: HttpClient, private store: Store<AppState>) {
    super()
  }

  getEmployees (): Observable<Employee[]> {
    return of(employees)
  }

  getPayslips (employeeId: number): Observable<Payslip[]> {
    return of(payslips.filter(payslip => payslip.employeeId === employeeId))
  }

  createPayslip (payslipDetails: CreatePayslip): Observable<boolean> {
    const payslip = {
      id: payslipDetails.id,
      employeeId: payslipDetails.employeeId,
      period: payslipDetails.startDate.toISOString()
    }

    // some rest call then ...
    this.store.dispatch(new CurrentEmployeeAddPayslip(payslip))
    return of(true)
  }

  deletePayslip (payslipId: number): Observable<boolean> {
    // some rest call then ...
    this.store.dispatch(new CurrentEmployeeDeletePayslip(payslipId))
    return of(true)
  }
}
