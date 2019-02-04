import { Component, OnInit, Input } from '@angular/core'
import { MatDialog } from '@angular/material'
import { UpdateEmployeeDialogComponent } from '../../update-employee-dialog/update-employee-dialog.component'
import { CreatePayslipDialogComponent } from '../create-payslip-dialog/create-payslip-dialog.component'
import { DataService } from '../../../services/api/data.service'
import { Employee } from '@models/employee.model'
@Component({
  selector: 'payslip-table-header',
  templateUrl: './payslip-table-header.component.html',
  styleUrls: ['./payslip-table-header.component.scss']
})
export class PayslipTableHeaderComponent implements OnInit {
  @Input() employee: Employee
  @Input() numPayslips: number
  constructor(public dialog: MatDialog, private api: DataService) { }

  ngOnInit() {
  }

  createNewPayslip () {
    const dialog = this.dialog.open(CreatePayslipDialogComponent, {
      data: {
        name: `${this.employee.firstName} ${this.employee.lastName}`
      }
    })

    dialog.afterClosed().subscribe(result => {
      if (result && result.startDate) {
        this.api.createPayslip({
          ...result,
          employeeId: this.employee.id,
          annualIncomeSnapshot: this.employee.annualIncome,
          pensionContributionSnapshot: this.employee.pensionContribution,
          id: this.numPayslips
        })
      }
    })
  }

  updateRecords () {
    const dialog = this.dialog.open(UpdateEmployeeDialogComponent, {
      data: {
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        annualIncome: this.employee.annualIncome,
        pensionContribution: this.employee.pensionContribution,
        paymentDate: this.employee.paymentDate
      }
    })

    dialog.afterClosed().subscribe(result => {
      if (result && Object.keys(result) && Object.keys(result).length) {
        this.api.updateEmployee(this.employee.id, result)
      }
    })
  }
}
