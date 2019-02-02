import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

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

import { AuthGuard } from './store/guards/auth.guard';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { TableHeaderComponent } from './components/employee-table/table-header/table-header.component';
import { TableRowComponent } from './components/employee-table/table-row/table-row.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { PayslipTableComponent } from './components/payslip-table/payslip-table.component'
import { PayslipResolverService } from './services/resolvers/payslip';
import { PayslipTableHeaderComponent } from './components/payslip-table/payslip-table-header/payslip-table-header.component';
import { PayslipRowComponent } from './components/payslip-table/payslip-row/payslip-row.component'

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
    PayslipRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      { ...Reducers }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    AuthGuard,
    PayslipResolverService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
