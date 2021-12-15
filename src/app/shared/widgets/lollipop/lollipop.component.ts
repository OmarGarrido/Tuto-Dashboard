import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-lollipop',
  templateUrl: './lollipop.component.html',
  styleUrls: ['./lollipop.component.scss'],
})
export class LollipopComponent implements OnInit {
  @Input() data?: [];

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {}
  }
}
