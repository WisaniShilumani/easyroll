import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { EmployeesComponent } from './pages/employees/employees.component'
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component'
import { PayslipComponent } from './pages/payslip/payslip.component'
import { LoginComponent } from './pages/login/login.component'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { Reducers } from './store/reducers'
import { metaReducers } from './store/meta-reducers'

import { AuthGuard } from './store/guards/auth.guard';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { TableHeaderComponent } from './components/employee-table/table-header/table-header.component';
import { TableRowComponent } from './components/employee-table/table-row/table-row.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { PayslipTableComponent } from './components/payslip-table/payslip-table.component'
import { PayslipResolverService } from './services/resolvers/payslip';
import { EmployeesResolverService } from './services/resolvers/employees'
import { PayslipTableHeaderComponent } from './components/payslip-table/payslip-table-header/payslip-table-header.component';
import { PayslipRowComponent } from './components/payslip-table/payslip-row/payslip-row.component';
import { PayslipSummaryComponent } from './components/payslip-summary/payslip-summary.component';
import { PeriodPipe } from './pipes/period.pipe';

import { 
  MatDialogModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule,
  MatNativeDateModule } from '@angular/material';
import { CreatePayslipDialogComponent } from './components/payslip-table/create-payslip-dialog/create-payslip-dialog.component';
import { UpdateEmployeeDialogComponent } from './components/update-employee-dialog/update-employee-dialog.component';

const MatModules = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]
export const environment = {
  production: false
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    PayslipComponent,
    LoginComponent,
    EmployeeTableComponent,
    TableHeaderComponent,
    TableRowComponent,
    MainNavComponent,
    PayslipTableComponent,
    PayslipTableHeaderComponent,
    PayslipRowComponent,
    PayslipSummaryComponent,
    PeriodPipe,
    CreatePayslipDialogComponent,
    UpdateEmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...MatModules,
    StoreModule.forRoot(
      { ...Reducers },
      { metaReducers }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    AuthGuard,
    PayslipResolverService,
    EmployeesResolverService
  ],
  entryComponents: [
    CreatePayslipDialogComponent,
    UpdateEmployeeDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
