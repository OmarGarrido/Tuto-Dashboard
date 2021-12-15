import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  @Input() data?: [];

  chartOptions = {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Contagios de la última semana',
      },

      legend: {
        // enabled:true,
        // layout: 'vertical',
        // align: 'button',
        // verticalAlign: 'button',
        // x: 60,
        // y: 15,
        // floating: true,
        // borderWidth: 0,
        // backgroundColor: '#FFFFFF',
      },
      xAxis: {
        categories: [
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
          'Domingo',
        ],
        // plotBands: [
        //   {
        //     // visualize the weekend
        //     from: 4.5,
        //     to: 6.5,
        //     color: 'rgba(68, 170, 213, .2)',
        //   },
        // ],
      },
      yAxis: {
        title: {
          text: 'No. Contagios',
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: ' Contagios',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span>{series.name}</span>: <b>{point.y:.0f}</b><br/>',
      },

      // tooltip: {
      //   headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      //   pointFormat:
      //     '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}</b> %<br/>',
      // },
      credits: {
        enabled: false,
      },

      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
          // dataLabels: {
          //   enabled: true,
          //   format: '{point.y:.1f} %',
          // distance: -1.7,
          // filter: {
          //   property: 'y',
          //   operator: '>',
          //   value: 0,
          // },
          // style: {
          //   fontWeight: 'bold',
          //   color: 'black',
          // }
          // },
        },
      },

      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
