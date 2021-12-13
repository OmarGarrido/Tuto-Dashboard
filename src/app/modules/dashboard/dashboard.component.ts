import HC_exporting from 'highcharts/modules/exporting';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // prueba = new Chart(DriDrilldown);
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Total de contagios por division',
      },
      subtitle: {
        text: 'Da <strong>click</strong> a las columnas para mas detalles',
      },

      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Contagios',
        },
      },
      legend: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f} %',
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
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}</b> %<br/>',
      },

      series: [
        {
          name: 'Carreras',
          colorByPoint: true,
          data: [
            {
              name: 'Gestión Empresarial',
              y: Math.random() * 16,
              drilldown: 'Gestión Empresarial',
            },
            {
              name: 'Aeronáutica',
              y: Math.random() * 16,
              drilldown: 'Aeronáutica',
            },
            {
              name: 'Sistemas',
              y: Math.random() * 16,
              drilldown: 'Sistemas',
            },
            {
              name: 'Mecatrónica',
              y: Math.random() * 16,
              drilldown: 'Mecatrónica',
            },
            {
              name: 'Informática',
              y: Math.random() * 16,
              drilldown: 'Informática',
            },
            {
              name: 'Bioquímica',
              y: Math.random() * 16,
              drilldown: 'Bioquímica',
            },
          ],
        } as any,
      ],
      drilldown: {
        // breadcrumbs: {
        //     position: {
        //         align: 'right'
        //     }
        // },

        series: [
          {
            type: 'column',
            tooltip: {
              headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> Contagios<br/>',
            },
            // borderWidth: 0,
            dataLabels: {
              enabled: false,
              // format: '{point.y:.0f} Contagios',
            },

            name: 'Gestión Empresarial',
            id: 'Gestión Empresarial',
            data: [
              ['Enero', Math.random() * 100],
              ['Febrero', Math.random() * 100],
              ['Marzo', Math.random() * 100],
              ['Abril', Math.random() * 100],
              ['Mayo', Math.random() * 100],
              ['Junio', Math.random() * 100],
              ['Julio', Math.random() * 100],
              ['Agosto', Math.random() * 100],
              ['Septiembre', Math.random() * 100],
              ['Octubre', Math.random() * 100],
              ['Noviembre', Math.random() * 100],
              ['Diciembre', Math.random() * 100],
            ],
          },
          {
            type: 'column',
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> Contagios<br/>',
            },

            name: 'Aeronáutica',
            id: 'Aeronáutica',
            data: [
              ['Enero', Math.random() * 10],
              ['Febrero', Math.random() * 10],
              ['Marzo', Math.random() * 10],
              ['Abril', Math.random() * 10],
              ['Mayo', Math.random() * 10],
              ['Junio', Math.random() * 10],
              ['Julio', Math.random() * 10],
              ['Agosto', Math.random() * 10],
              ['Septiembre', Math.random() * 10],
              ['Octubre', Math.random() * 10],
              ['Noviembre', Math.random() * 10],
              ['Diciembre', Math.random() * 10],
            ],
          },
          {
            type: 'column',
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> Contagios<br/>',
            },

            name: 'Sistemas',
            id: 'Sistemas',
            data: [
              ['Enero', Math.random() * 10],
              ['Febrero', Math.random() * 10],
              ['Marzo', Math.random() * 10],
              ['Abril', Math.random() * 10],
              ['Mayo', Math.random() * 10],
              ['Junio', Math.random() * 10],
              ['Julio', Math.random() * 10],
              ['Agosto', Math.random() * 10],
              ['Septiembre', Math.random() * 10],
              ['Octubre', Math.random() * 10],
              ['Noviembre', Math.random() * 10],
              ['Diciembre', Math.random() * 10],
            ],
          },
          {
            type: 'column',
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> Contagios<br/>',
            },

            name: 'Mecatrónica',
            id: 'Mecatrónica',
            data: [
              ['Enero', Math.random() * 10],
              ['Febrero', Math.random() * 10],
              ['Marzo', Math.random() * 10],
              ['Abril', Math.random() * 10],
              ['Mayo', Math.random() * 10],
              ['Junio', Math.random() * 10],
              ['Julio', Math.random() * 10],
              ['Agosto', Math.random() * 10],
              ['Septiembre', Math.random() * 10],
              ['Octubre', Math.random() * 10],
              ['Noviembre', Math.random() * 10],
              ['Diciembre', Math.random() * 10],
            ],
          },
          {
            type: 'column',
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> Contagios<br/>',
            },

            name: 'Bioquímica',
            id: 'Bioquímica',
            data: [
              ['Enero', Math.random() * 10],
              ['Febrero', Math.random() * 10],
              ['Marzo', Math.random() * 10],
              ['Abril', Math.random() * 10],
              ['Mayo', Math.random() * 10],
              ['Junio', Math.random() * 10],
              ['Julio', Math.random() * 10],
              ['Agosto', Math.random() * 10],
              ['Septiembre', Math.random() * 10],
              ['Octubre', Math.random() * 10],
              ['Noviembre', Math.random() * 10],
              ['Diciembre', Math.random() * 10],
            ],
          },
          {
            type: 'column',
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> Contagios<br/>',
            },

            name: 'Informática',
            id: 'Informática',
            data: [
              ['Enero', Math.random() * 10],
              ['Febrero', Math.random() * 10],
              ['Marzo', Math.random() * 10],
              ['Abril', Math.random() * 10],
              ['Mayo', Math.random() * 10],
              ['Junio', Math.random() * 10],
              ['Julio', Math.random() * 10],
              ['Agosto', Math.random() * 10],
              ['Septiembre', Math.random() * 10],
              ['Octubre', Math.random() * 10],
              ['Noviembre', Math.random() * 10],
              ['Diciembre', Math.random() * 10],
            ],
          },
        ],
      },
    };
    HC_exporting(this.Highcharts);
  }
}
