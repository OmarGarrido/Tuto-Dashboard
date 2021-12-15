import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);

@Component({
  selector: 'app-widget-contagios',
  templateUrl: './contagios.component.html',
  styleUrls: ['./contagios.component.scss'],
})
export class ContagiosComponent implements OnInit {
  // @Input() label?: string;
  // @Input() total?: string;
  // // @Input() percentage?: string;

  Highcharts = Highcharts;
  chartOptions = {};
  vespertino = 30;
  matutino = 25;
  contagios = 0;

  // prueba = new Chart(DriDrilldown);

  constructor() {}

  ngOnInit(): void {
    this.contagios = this.vespertino + this.matutino;
    // var chart = Highcharts.chart("container", this.chartOptions );
    this.chartOptions = {
      chart: {
        type: 'pie',
        plotShadow: false,

        // borderWidth: 0,
        margin: [2, 2, 2, 2],
        // height: 300,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          innerSize: '100%',
          borderWidth: 30,
          borderColor: '',
          slicedOffset: 200,
          dataLabels: {
            format: '{point.percentage:.2f} %',
            enabled: true,
            distance: -1.7,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 0,
            },
            style: {
              fontWeight: 'bold',
              // color: 'black',
            },
          },
        },
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Contagios: <b>{point.y}</b><br/>',
      },
      exporting: {
        enabled: false,
      },
      title: {
        verticalAlign: 'top',
        floating: true,
        text: 'Contagios Totales',
      },
      subtitle: {
        verticalAlign: 'middle',
        floating: true,
        text: this.contagios + ' Contagios',
        style: {
          fontWeight: 'bold',
          color: 'gray',
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          type: 'pie',
          // name:"Contagios",

          data: [
            { name: 'Matutino', y: this.matutino, color: '#393e46' },
            { name: 'Vespertino', y: this.vespertino, color: '#506ef9' },
          ],
        },
      ],
    };
    // HC_exporting(this.Highcharts);
  }
}

//

// {
//   chart: {
//     type: 'area',
//     background: null,
//     borderWidth: 0,
//     margin: [2, 2, 2, 2],
//     height: 60,
//   },
//   title: {
//     text: null,
//   },
//   subtitle: {
//     text: null,
//   },
//   xAxis: {
//     labels: {
//       enabled: false,
//     },
//     title: {
//       text: null,
//     },
//     startOnTick: false,
//     endOnTick: false,
//     tickOptions: [],
//   },
//   yAxis: {
//     labels: {
//       enabled: false,
//     },
//     title: {
//       text: null,
//     },
//     startOnTick: false,
//     endOnTick: false,
//     tickOptions: [],
//   },
//   tooltip: {
//     split: true,
//     outside: true,
//     // valueSuffix: ' millions',
//   },
//   legend: {
//     enabled: false,
//   },
//   credits: {
//     enabled: false,
//   },
//   exporting: {
//     enabled: false,
//   },

//   // plotOptions: {
//   //     area: {
//   //         stacking: 'normal',
//   //         lineColor: '#666666',
//   //         lineWidth: 1,
//   //         marker: {
//   //             lineWidth: 1,
//   //             lineColor: '#666666'
//   //         }
//   //     }
//   // },
//   series: [
//     {
//       data: [70, 50, 35, 66],
//     },
//   ],
// };
