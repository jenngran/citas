import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //api url
    url: string = environment.services.apiUrl;

    constructor(private http: HttpClient) { }

    //login
    auth(username: any, pass: any) {
        return this.http.post(`${this.url}/login?username=${username}&password=${pass}`, {});
    }

    postCita(body: any) {
        return this.http.post(`${this.url}/cita`, body);
    }

    getCitas() {
        return this.http.get(`${this.url}/citas`);
    }
    getMedicos() {
        return this.http.get(`${this.url}/medicos`);
    }
    getPacientes() {
        return this.http.get(`${this.url}/pacientes`);
    }

}



