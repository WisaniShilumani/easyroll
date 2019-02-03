import { Component, OnInit, Input } from '@angular/core'
import { MatDialog } from '@angular/material'
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
          id: this.numPayslips
        })
      }
    })
  }

  updateRecords () {
    
  }
}
