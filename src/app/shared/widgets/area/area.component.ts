import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'areaspline',
      },
      title: {
        text: 'Contagios de la última semana',
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 60,
        y: 15,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
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
        plotBands: [
          {
            // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)',
          },
        ],
      },
      yAxis: {
        title: {
          text: 'No. Contagios',
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: ' Contagios',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          name: 'Informática',
          data: [3, 4, 3, 5, 4, 10, 12],
        },
        {
          name: 'Aeronáutica',
          data: [1, 3, 4, 3, 3, 5, 4],
        },
        {
          name: 'Gestión Empresarial',
          data: [5, 3, 1, 8, 2, 3, 0],
        },
        {
          name: 'Sistemas',
          data: [10, 5, 8, 6, 3, 2, 2],
        },
        {
          name: 'Mecatrónica',
          data: [8, 4, 2, 0, 3, 6, 9],
        },
        {
          name: 'Bioquímica',
          data: [1, 3, 5, 7, 8, 9, 5],
        },
      ],
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
