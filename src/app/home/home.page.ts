import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  calificaciones: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public utils: UtilsService
  ) {
    this.route.params.subscribe((params) => {
      this.data = JSON.parse(params.data);
      // eslint-disable-next-line no-underscore-dangle
      this.utils.getCalificationsByProfessor(this.data._id).subscribe((res) => {
        this.calificaciones = res;
        this.calificaciones = this.calificaciones.calificacion;
      });
    });
  }

  navigate() {
    this.router.navigate([
      '/new-calification',
      { data: JSON.stringify(this.data), edit: false },
    ]);
  }
  edit(calificacion) {
    this.router.navigate([
      '/new-calification',
      {
        data: JSON.stringify(this.data),
        edit: true,
        calificacion: JSON.stringify(calificacion),
      },
    ]);
  }
}
