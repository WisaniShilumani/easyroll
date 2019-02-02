import { Component, OnInit, Input } from '@angular/core'
import { Employee } from '@models/employee.model'
@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() employee
  constructor() { }

  ngOnInit() {
  }

}
