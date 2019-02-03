import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Payslip } from '@models/payslip.model'
import { calculateIncome } from '@utils/income/incomeCalculator'
@Component({
  selector: 'payslip-row',
  templateUrl: './payslip-row.component.html',
  styleUrls: ['./payslip-row.component.scss']
})
export class PayslipRowComponent implements OnInit {
  @Input() payslip: Payslip
  @Input() displayName: string
  @Input() pensionContribution: number
  @Input() showDetails = false
  @Output() viewPayslip = new EventEmitter()
  constructor() { }

  ngOnInit() {

  }

  expandPayslip() {
    this.viewPayslip.emit(this.payslip.id)
  }

  get payslipSummary () {
    return {
      ...calculateIncome(this.payslip.annualIncomeSnapshot, this.pensionContribution),
      paymentDate: this.payslip.paymentDate
    }
  }
}
