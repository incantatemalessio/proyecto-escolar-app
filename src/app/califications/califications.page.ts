import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-califications',
  templateUrl: './califications.page.html',
  styleUrls: ['./califications.page.scss'],
})
export class CalificationsPage {
  data: any;
  calificaciones: any;
  constructor(public utils: UtilsService, public alertCtrl: AlertController) {
    this.utils.getCalifications().subscribe((res) => {
      this.calificaciones = res;
      this.calificaciones = this.calificaciones.calificacion;
    });
  }
  async presentAlert(title, subtitle, mensaje) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: subtitle,
      message: mensaje,

      buttons: ['Ok'],
    });
    alert.present();
  }
  goDetail(item) {
    const title = `${item.alumno}`;
    const subtitle = `Materia:${item.materia} - Cal:${item.nota}`;
    const message = `
    descripcion: ${item.descripcion}
    asistencias: ${item.asistencias}
    profesor: ${item.professorId.name}
    `;

    this.presentAlert(title, subtitle, message);
  }
}
