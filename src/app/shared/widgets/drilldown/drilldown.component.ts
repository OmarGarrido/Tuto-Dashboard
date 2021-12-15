import { Component, Input, OnInit } from '@angular/core';

import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.scss']
})
export class DrilldownComponent implements OnInit {

@Input () data?:[]
@Input () datadrill?:[]

  Highcharts=Highcharts;
  chartOptions={}

  constructor() { }

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
          data: this.data,
        } as any,
      ],
      drilldown: {
        // breadcrumbs: {
        //     position: {
        //         align: 'right'
        //     }
        // },

        series: this.datadrill,
      },
    };
  }

}
