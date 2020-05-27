import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BackgroundImgService } from './../service/background-img.service';
import { ColorService } from './../service/color.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit, AfterViewInit {

  @ViewChild('bg') bg: ElementRef;
  plans: string[] = ['计划1', '计划2'];

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private imgService: BackgroundImgService,
    private colorService: ColorService
  ) { }

  ngAfterViewInit(): void {
    // 设置背景图
    this.imgService.img$.subscribe(img => {
      this.render.setStyle(this.bg.nativeElement, 'background-image', `url('../../assets/bg${img}.jpg')`)
      this.render.setStyle(this.el.nativeElement, 'background-image', `url('../../assets/bg${img}.jpg')`)
    })
  
    // 设置字体颜色
    this.colorService.color$.subscribe(color => {
      this.render.setStyle(this.el.nativeElement, 'color', color);
    })
  }

  ngOnInit(): void {
  }

  

}