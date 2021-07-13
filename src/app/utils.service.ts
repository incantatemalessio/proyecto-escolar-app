import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private http: HttpClient) {}

  login(body) {
    console.log(`${environment.baseUrl}`);

    return this.http.post(
      `${environment.baseUrl}user/login`,
      body,
      httpOptions
    );
  }

  signup(body) {
    return this.http.post(
      `${environment.baseUrl}user/signup`,
      body,
      httpOptions
    );
  }

  newCalification(body) {
    return this.http.post(
      `${environment.baseUrl}alumno/registrarNota`,
      body,
      httpOptions
    );
  }

  updateCalification(body) {
    return this.http.put(
      `${environment.baseUrl}alumno/actualizarCalificacion`,
      body,
      httpOptions
    );
  }

  deleteCalification(body) {
    return this.http.put(
      `${environment.baseUrl}alumno/eliminarCalificacion`,
      body,
      httpOptions
    );
  }

  getCalificationsByProfessor(professorId) {
    return this.http.get(
      `${environment.baseUrl}alumno/obtenerCalificacionesPorProfesor?id=${professorId}`
    );
  }

  getCalifications() {
    return this.http.get(`${environment.baseUrl}alumno/obtenerCalificaciones`);
  }
}
