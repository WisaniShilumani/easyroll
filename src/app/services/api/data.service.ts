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
import { UpdateEmployee } from '@models/update-employee'
import { CreatePayslip } from '@models/create-payslip.model'

import { Store } from '@ngrx/store'
import { AppState } from '@store/store.interface'

import { CurrentEmployeeAddPayslip, CurrentEmployeeUpdateDetails } from '@store/actions/current-employee.actions'
@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseApiService {
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient, private store: Store<AppState>) {
    super()
  }

  getEmployees (): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees`, this.httpOptions)
  }

  updateEmployee (employeeId: number, employeeData: UpdateEmployee) {
    return this.http.post(
      `${this.apiUrl}/employees/${employeeId}`,
      employeeData,
      this.httpOptions
    ).subscribe(() => {
      this.store.dispatch(new CurrentEmployeeUpdateDetails(employeeData))
    }, error => {
      console.error(error)
    })
  }

  getPayslips (employeeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/payslips/${employeeId}`, this.httpOptions)
  }

  createPayslip (payslipDetails: CreatePayslip) {
    const payslip = {
      id: payslipDetails.id,
      employeeId: payslipDetails.employeeId,
      period: payslipDetails.startDate.toISOString()
    }

    return this.http.post(
      `${this.apiUrl}/payslips/${payslipDetails.employeeId}`,
      { paymentDate: payslipDetails.startDate.toISOString() },
      this.httpOptions
    ).subscribe(() => {
      this.store.dispatch(new CurrentEmployeeAddPayslip(payslip))
    })
  }
}
