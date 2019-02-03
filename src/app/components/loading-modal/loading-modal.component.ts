import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface LoadingModal {
  state: string,
  message: string
}

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent {

  constructor(
    public dialogRef: MatDialogRef<LoadingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoadingModal
  ) { }

  close(): void {
    this.dialogRef.close()
  }
}
