import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() enterPlan = new EventEmitter<string>()

  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  enter(): void {
    this.enterPlan.emit(this.value)
    this.value = ''
  }

}
