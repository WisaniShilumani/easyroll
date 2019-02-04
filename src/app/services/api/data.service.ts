import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { BaseApiService } from './base-api.service'
import { Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { Observable } from 'rxjs'
import { UpdateEmployee } from '@models/update-employee'
import { CreatePayslip } from '@models/create-payslip.model'
import { MatDialog } from '@angular/material'
import { LoadingModalComponent } from '../../components/loading-modal/loading-modal.component'

import { Store } from '@ngrx/store'
import { AppState } from '@store/store.interface'

import { CurrentEmployeeAddPayslip, CurrentEmployeeUpdateDetails } from '@store/actions/current-employee.actions'
@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseApiService {
  apiUrl: string = environment.apiUrl
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    public dialog: MatDialog) {
    super()
  }

  getEmployees (): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees`, this.httpOptions)
  }

  updateEmployee (employeeId: number, employeeData: UpdateEmployee) {
    this.showLoading()
    return this.http.post(
      `${this.apiUrl}/employees/${employeeId}`,
      employeeData,
      this.httpOptions
    ).subscribe(() => {
      this.closeModals()
      this.store.dispatch(new CurrentEmployeeUpdateDetails(employeeData))
    }, error => {
      this.showError(error.message)
      console.error(error)
    })
  }

  getPayslips (employeeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/payslips/${employeeId}`, this.httpOptions)
  }

  createPayslip (payslipDetails: CreatePayslip) {
    this.showLoading()
    const payslip = {
      id: payslipDetails.id,
      employeeId: payslipDetails.employeeId,
      paymentDate: payslipDetails.startDate.toISOString(),
      annualIncomeSnapshot: payslipDetails.annualIncomeSnapshot,
      pensionContributionSnapshot: payslipDetails.pensionContributionSnapshot
    }

    return this.http.post(
      `${this.apiUrl}/payslips/${payslipDetails.employeeId}`,
      {
        paymentDate: payslipDetails.startDate.toISOString(),
        annualIncomeSnapshot: payslipDetails.annualIncomeSnapshot,
        pensionContributionSnapshot: payslipDetails.pensionContributionSnapshot
      },
      this.httpOptions
    ).subscribe(() => {
      this.closeModals()
      this.store.dispatch(new CurrentEmployeeAddPayslip(payslip))
    }, error => {
      this.showError(error.message)
    })
  }

  showModal (state: string = 'loading', message: string = null) {
    this.dialog.open(LoadingModalComponent, {
      data: { state: 'loading', message: '' }
    })
  }

  showLoading () {
    this.showModal()
  }

  showError (message: string = 'Unknown error') {
    this.closeModals()
    this.showModal('error', message)
  }

  closeModals () {
    this.dialog.closeAll()
  }
}
