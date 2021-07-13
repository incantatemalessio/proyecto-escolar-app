import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-new-calification',
  templateUrl: './new-calification.page.html',
  styleUrls: ['./new-calification.page.scss'],
})
export class NewCalificationPage {
  form: FormGroup;
  data: any;
  edit: boolean;
  note;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public utils: UtilsService,
    public alertController: AlertController
  ) {
    this.form = new FormGroup({
      _id: new FormControl(),
      professorId: new FormControl(),
      alumno: new FormControl('', Validators.required),
      materia: new FormControl('', Validators.required),
      nota: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      asistencias: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
    });

    this.route.params.subscribe((params) => {
      this.data = JSON.parse(params.data);
      this.edit = JSON.parse(params.edit);
      if (this.edit) {
        this.note = JSON.parse(params.calificacion);
        this.form.patchValue({ alumno: this.note.alumno });
        this.form.patchValue({ materia: this.note.materia });
        this.form.patchValue({ nota: this.note.nota });
        this.form.patchValue({ descripcion: this.note.descripcion });
        this.form.patchValue({ asistencias: this.note.asistencias });
        this.form.patchValue({ matricula: this.note.matricula });
      }
    });
  }

  newCalification() {
    let info: any;
    // eslint-disable-next-line no-underscore-dangle
    this.form.patchValue({ professorId: this.data._id });
    if (this.form.valid) {
      this.utils.newCalification(this.form.value).subscribe((res) => {
        info = res;
        this.presentAlert('Exito', info.message);
        this.back();
      });
    }
  }
  updateCalification() {
    let info: any;
    // eslint-disable-next-line no-underscore-dangle
    this.form.patchValue({ _id: this.note._id });
    if (this.form.valid) {
      this.utils.updateCalification(this.form.value).subscribe((res) => {
        info = res;
        this.presentAlert('Exito', info.message);
        this.back();
      });
    }
  }

  deleteCalification() {
    let info: any;
    // eslint-disable-next-line no-underscore-dangle
    this.form.patchValue({ _id: this.note._id });
    if (this.form.valid) {
      this.utils.deleteCalification(this.form.value).subscribe((res) => {
        info = res;
        this.presentAlert('Exito', info.message);
        this.back();
      });
    }
  }

  async presentAlert(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  back(): void {
    this.router.navigate([
      '/home',
      { data: JSON.stringify(this.data), edit: false },
    ]);
  }
}
