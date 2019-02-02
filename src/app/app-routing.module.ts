import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { PayslipComponent } from './pages/payslip/payslip.component';
import { AuthGuard } from './store/guards/auth.guard'


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: EmployeesComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        canActivateChild: [ AuthGuard ],
        children: [
          {
            path: ':id',
            component: EmployeeDetailsComponent
          },
          {
            path: ':id/:payslip',
            component: PayslipComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
