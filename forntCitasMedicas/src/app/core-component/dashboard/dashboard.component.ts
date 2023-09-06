import { Component, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';
import { CommonService, SettingsService } from 'src/app/core/core.index';
import { routes } from 'src/app/core/helpers/routes';
import { ApiService } from 'src/app/core/service/data/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public routes = routes;
  public currency!: string;

  lista_Citas: any = [];

  constructor(private common: CommonService,
    private setting: SettingsService, private api: ApiService) {

    this.common.currency$.subscribe((res: string) => {
      this.currency = res;
    });

    api.getCitas().subscribe((cita: any) => {
      cita.forEach((x: any, index: any) => {
        var citaLista = {
          SNo: index + 1,
          NombrePaciente: x.nombrePaciente,
          Medico: x.nombre,
          Especializacion: x.especialidad,
          descripcionCita: x.descripcionCita,
          fecha: x.fechaHora,
        }
        this.lista_Citas.push(citaLista)
      });
    })

  }
  public sortExpiredProducts(sort: Sort) {
    const data = this.lista_Citas.slice();

    if (!sort.active || sort.direction === '') {
      this.lista_Citas = data;
    } else {
      this.lista_Citas = data.sort((a: any, b: any) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
}
