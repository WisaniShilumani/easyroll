import { Component, OnInit, Input } from '@angular/core';
import { Payslip } from '@models/payslip.model'
@Component({
  selector: 'payslip-table',
  templateUrl: './payslip-table.component.html',
  styleUrls: ['./payslip-table.component.scss']
})
export class PayslipTableComponent implements OnInit {
  @Input() payslips: Payslip[] = []
  @Input() pensionContribution: number
  @Input() displayName: string
  activePayslip: number
  constructor() { }

  ngOnInit() {
  }

  viewPayslip (payslip: string) {
    this.activePayslip = +payslip
  }
}
