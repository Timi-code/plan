import { Component, OnInit, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Input() plans: string[];
  @Input() bgImg: string;
  @Output() handleBgImg = new EventEmitter();

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    if (this.bgImg) {
      this.render.setStyle(this.el.nativeElement.querySelector('.upload'), 'background-image', `url(${this.bgImg})`);
    }
  }

  // 自定义背景图
  upload($event: Event): void {
    const target = $event.target as HTMLInputElement;
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (event: Event) => {
      const fileReader = event.target as FileReader;
      this.render.setStyle(this.el.nativeElement.querySelector('.upload'), 'background-image', `url(${fileReader.result})`);
      this.handleBgImg.emit(fileReader.result)
    }
    reader.readAsDataURL(file);
  }

}
