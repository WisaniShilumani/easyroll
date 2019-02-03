import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { UpdateEmployee } from '@models/update-employee'

@Component({
  selector: 'update-employee-dialog',
  templateUrl: './update-employee-dialog.component.html',
  styleUrls: ['./update-employee-dialog.component.scss']
})
export class UpdateEmployeeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateEmployee
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
