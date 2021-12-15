import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-lollipop',
  templateUrl: './lollipop.component.html',
  styleUrls: ['./lollipop.component.scss'],
})
export class LollipopComponent implements OnInit {
  @Input() label?: string;
  // @Input() total?: string;
  // @Input() percentage?: string;
  @Input() data?: [];
  @Input() type?: string;

  total=Math.round(Math.random()*100);
  percentage=Math.round(Math.random()*100);

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: this.type,
        background: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      tooltip: {
        split: true,
        outside: true,
        // valueSuffix: ' millions',
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          data: this.data,
        },
      ],
    };
    // HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
