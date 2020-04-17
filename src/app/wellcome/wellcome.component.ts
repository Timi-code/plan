import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {

  @Output() plan: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    this.plan.emit()
  }

}
