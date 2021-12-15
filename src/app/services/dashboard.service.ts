import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  cards = [
    Math.round(Math.random() * 20),
    Math.round(Math.random() * 30),
    Math.round(Math.random() * 40),
    Math.round(Math.random() * 50),
    Math.round(Math.random() * 60),
    Math.round(Math.random() * 70),
    Math.round(Math.random() * 100),
  ];

  random = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
  ];

  lows = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 70),
    Math.round(Math.random() * 60),
    Math.round(Math.random() * 50),
    Math.round(Math.random() * 40),
    Math.round(Math.random() * 30),
    Math.round(Math.random() * 20),
  ];

  columnData = [
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
  ];

  columnDataDrill = [
    {
      type: 'column',
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
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
  ];

  lollipop = [
    {
      name: 'Gestión Empresarial',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Aeronáutica',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Sistemas',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Mecatrónica',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Informática',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Bioquímica',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Contaduria',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Mecanica',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Química',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Electrónica',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      name: 'Industrial',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
    {
      dataLabels: {
        enabled: true,
        format: '<span style="font-size:x-small;">{point.y:.0f}</span>',
      },
      type: 'line',
      name: 'Promedio',
      data: [
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
        // Math.random() * 20,
      ],
    },
  ];

  areaSeries = [
    {
      name: 'Gestión Empresarial',
      // data: [Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
      data: [3, 4, 3, 5, 4, 10, 12],
      drilldown: 'Gestión Empresarial',
    },
    {
      name: 'Aeronáutica',
      // data: [Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
      data: [1, 3, 4, 3, 3, 5, 4],
    },
    {
      name: 'Sistemas',
      // data: [Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
      data: [5, 3, 1, 8, 2, 3, 0],
    },
    {
      name: 'Mecatrónica',
      // data: [Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
      data: [10, 5, 8, 6, 3, 2, 2],
    },
    {
      name: 'Informática',
      // data: [Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
      data: [8, 4, 2, 0, 3, 6, 9],
    },
    {
      name: 'Bioquímica',
      // data: [Math.floor(Math.random()*10), Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)],
      data: [1, 3, 5, 7, 8, 9, 5],
    },
  ];
}
