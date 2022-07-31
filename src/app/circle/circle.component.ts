import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  constructor() { }
  box: any = [1,2,3,4,5,6,7,8,9,10];
  radius: number = 90;
  steps: number = this.box.length;
  centerX: number = 110;
  centerY: number = 140;

  xValues: any = [];
  yValues: any = [];


  ngOnInit(): void {
    this.circle(this.radius, this.steps, this.centerX, this.centerY);
  }

  circle(radius, steps, centerX, centerY) {
    this.xValues = [centerX];
    this.yValues = [centerY];
    for (var i = 0; i < steps; i++) {
      this.xValues[i] = Math.round((centerX + radius * Math.cos(2 * Math.PI * i / steps)));
      this.yValues[i] = Math.round((centerY + radius * Math.sin(2 * Math.PI * i / steps)));
    }
    console.log(this.yValues)
    console.log(this.xValues)
  }
}
