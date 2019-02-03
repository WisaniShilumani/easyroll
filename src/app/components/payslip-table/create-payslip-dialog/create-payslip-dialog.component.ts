import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { CreatePayslip } from '@models/create-payslip.model'

@Component({
  selector: 'app-create-payslip-dialog',
  templateUrl: './create-payslip-dialog.component.html',
  styleUrls: ['./create-payslip-dialog.component.scss']
})
export class CreatePayslipDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<CreatePayslipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreatePayslip
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
