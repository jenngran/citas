import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';
import { ApiService } from 'src/app/core/service/data/api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  public routes = routes;
  public idSelectedPaciente = '';
  public nombreSelectePaciente = '';
  public idSelectedMedico = '';
  public especialidad = "";
  public descripcion = "";
  public fechaIngreso = new Date();

  selectedList1: any[] = [

  ];
  selectedList2: any[] = [

  ];

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private api: ApiService, private router: Router,) { }

  ngOnInit(): void {
    this.loadPacientes();
    this.loadMedicos();
  }
  loadMedicos() {
    this.api.getMedicos().subscribe((data: any) => {
      this.selectedList2 = data
      console.log(this.selectedList2);
    })
  }
  loadPacientes() {
    this.api.getPacientes().subscribe((data: any) => {
      this.selectedList1 = data
    })
  }
  getMedicosData(value: any, tipo: string) {
    switch (tipo) {
      case "paciente":
        this.idSelectedPaciente = value.idUsuario
        this.nombreSelectePaciente = value.userName
        break;
      case "medico":
        this.idSelectedMedico = value.idMedico
        this.especialidad = value.especializacion
        break;
      default:
        break;
    }
  }

  guardarCita() {
    var datosEnvios =
    {
      "idMedico": this.idSelectedMedico,
      "idUsuario": this.idSelectedPaciente,
      "nombrePaciente": this.nombreSelectePaciente,
      "fechaHora": this.fechaIngreso.toISOString(),
      "descripcionCita": this.descripcion
    }
    console.log(datosEnvios);
    if (this.idSelectedMedico != null || this.idSelectedMedico != "") {
      this.api.postCita(datosEnvios).subscribe((data: any) => {
        console.log(data);
        this.idSelectedMedico = ''
        this.idSelectedPaciente = ''
        this.nombreSelectePaciente = ''
        this.descripcion = ''
        this.router.navigate([routes.dashboard]);
      })
    }
  }


}
