import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input() showSearch: Boolean = false
  @Input() title: string
  @Output() updateSearchString = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  search (event) {
    this.updateSearchString.emit(event.target.value)
  }

}
