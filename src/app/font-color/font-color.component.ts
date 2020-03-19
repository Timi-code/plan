import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-font-color',
  templateUrl: './font-color.component.html',
  styleUrls: ['./font-color.component.scss']
})
export class FontColorComponent implements OnInit {
  @Input() plans: string[] = [];
  @Input() bgImg: string;
  @Input() colorSelector: boolean;
  color: string = '#fff';

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    if (this.bgImg) {
      this.render.setStyle(this.el.nativeElement.querySelector('.font-color'), 'background-image', `url(${this.bgImg})`);
    }
  }

  colorChange($event): void {
    console.log($event.target.value);
  }

}
