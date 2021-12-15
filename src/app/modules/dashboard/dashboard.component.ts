import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // prueba = new Chart(DriDrilldown);

  //data para graficos
  columnData: any;
  columnDataDrill: any;
  lollipop: any;
  areaSeries: any;


  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.columnData=this.dashboardService.columnData
    this.columnDataDrill=this.dashboardService.columnDataDrill
    this.lollipop=this.dashboardService.lollipop
    this.areaSeries=this.dashboardService.areaSeries
  }
}
