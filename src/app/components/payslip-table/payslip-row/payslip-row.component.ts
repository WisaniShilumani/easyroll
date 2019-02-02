import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payslip } from '@models/payslip.model'
@Component({
  selector: 'payslip-row',
  templateUrl: './payslip-row.component.html',
  styleUrls: ['./payslip-row.component.scss']
})
export class PayslipRowComponent implements OnInit {
  @Input() payslip: Payslip
  @Output() viewPayslip = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  expandPayslip() {
    this.viewPayslip.emit(this.payslip.id)
  }

  thousands (number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
