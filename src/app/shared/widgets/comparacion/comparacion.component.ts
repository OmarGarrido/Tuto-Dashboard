import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-comparacion',
  templateUrl: './comparacion.component.html',
  styleUrls: ['./comparacion.component.scss'],
})
export class ComparacionComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  /**
   * Gestión Empresarial
   * Aeronáutica
   * Sistemas
   * Mecatrónica
   * Informática
   * Bioquímica
   * Contaduria
   * Mecanica
   * Química
   * Electrónica
   * Industrial
   */
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Las carreras con mas contagios por trismetre',
      },
      xAxis: {
        categories: [
          'Gestión Empresarial',
          'Aeronáutica',
          ' Sistemas',
          ' Mecatrónica',
          ' Informática',
          ' Bioquímica',
          ' Contaduria',
          ' Mecanica',
          ' Química',
          ' Electrónica',
          ' Industrial],',
        ],
      },
      labels: {
        items: [
          {
            html: 'Contagios Totales por mes',
            style: {
              left: '50px',
              top: '18px',
            },
          },
        ],
      },
      series: [
        {
          type: 'column',
          name: 'Enero',
          data: [3, 2, 1, 3, 4],
        },
        {
          type: 'column',
          name: 'Febrero',
          data: [2, 3, 5, 7, 6],
        },
        {
          type: 'column',
          name: 'Marzo',
          data: [4, 3, 3, 9, 0],
        },
        {
          type: 'spline',
          name: 'Average',
          data: [3, 2.67, 3, 6.33, 3.33],
          marker: {
            lineWidth: 2,
            // lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white',
          },
        },
        {
          type: 'pie',
          name: 'Contagios Totales',
          data: [
            {
              name: 'Enero',
              y: 13,
              // color: Highcharts.getOptions().colors[0], // Jane's color
            },
            {
              name: 'Febrero',
              y: 23,
              // color: Highcharts.getOptions().colors[1], // John's color
            },
            {
              name: 'Marzo',
              y: 19,
              // color: Highcharts.getOptions().colors[2], // Joe's color
            },
          ],
          center: [100, 80],
          size: 100,
          showInLegend: false,
          dataLabels: {
            enabled: false,
          },
        },
      ],
    };
  }
}
