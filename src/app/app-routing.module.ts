import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { PayslipComponent } from './pages/payslip/payslip.component';
import { AuthGuard } from './store/guards/auth.guard'
import { PayslipResolverService } from './services/resolvers/payslip'
import { EmployeesResolverService } from './services/resolvers/employees'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: EmployeesComponent,
    canActivate: [ AuthGuard ],
    resolve: {
      employees: EmployeesResolverService
    }
  },
  {
    path: 'admin/employee/:id',
    component: EmployeeDetailsComponent,
    canActivate: [ AuthGuard ],
    resolve: {
      employeeData: PayslipResolverService
    }
  },
  {
    path: 'admin/employee/:id/:payslip',
    component: PayslipComponent,
    canActivate: [ AuthGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
