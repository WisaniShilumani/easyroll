import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payslip } from '@models/payslip.model'
import { Employee } from '@models/employee.model'
@Component({
  selector: 'payslip-table',
  templateUrl: './payslip-table.component.html',
  styleUrls: ['./payslip-table.component.scss']
})
export class PayslipTableComponent implements OnInit {
  @Input() payslips: Payslip[] = []
  @Input() pensionContribution: number
  @Input() employee: Employee
  @Input() displayName: string
  @Input() employeeId: number
  @Input() annualIncome: number
  @Output() deletePayslip = new EventEmitter()
  activePayslip: number
  constructor() { }

  ngOnInit() {
  }

  viewPayslip (payslip: string) {
    this.activePayslip = +payslip
  }
}
