import { Component, OnInit, Input } from '@angular/core'
import { Payslip } from '@models/payslip.model'
@Component({
  selector: 'payslip-summary',
  templateUrl: './payslip-summary.component.html',
  styleUrls: ['./payslip-summary.component.scss']
})
export class PayslipSummaryComponent implements OnInit {
  @Input() summary: any
  @Input() displayName: string
  constructor() { }

  ngOnInit() {
  }

  thousands (number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

}
