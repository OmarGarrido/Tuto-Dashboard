import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexModule } from '@angular/flex-layout';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ContagiosComponent } from './widgets/contagios/contagios.component';
import { LollipopComponent } from './widgets/lollipop/lollipop.component';
import { DrilldownComponent } from './widgets/drilldown/drilldown.component';
import { ComparacionComponent } from './widgets/comparacion/comparacion.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    ContagiosComponent,
    LollipopComponent,
    DrilldownComponent,
    ComparacionComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    HighchartsChartModule,

  ],
  exports: [HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    ContagiosComponent,
    DrilldownComponent,
    LollipopComponent,
    ComparacionComponent
  ],
})
export class SharedModule {}
