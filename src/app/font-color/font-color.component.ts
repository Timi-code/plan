import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-font-color',
  templateUrl: './font-color.component.html',
  styleUrls: ['./font-color.component.scss']
})
export class FontColorComponent implements OnInit {
  @Input() plans: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
