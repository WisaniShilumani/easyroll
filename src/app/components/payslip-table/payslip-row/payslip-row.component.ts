import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() annualIncome: number
  @Input() pensionContribution: number
  @Input() showDetails: boolean = false
  @Output() viewPayslip = new EventEmitter()
  @Output() deletePayslip = new EventEmitter()
  constructor() { }

  ngOnInit() {
    
  }

  expandPayslip() {
    this.viewPayslip.emit(this.payslip.id)
  }

  thousands (number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  get payslipSummary () {
    return {
      ...calculateIncome(this.annualIncome, this.pensionContribution),
      period: this.payslip.period
    }
  }
}
