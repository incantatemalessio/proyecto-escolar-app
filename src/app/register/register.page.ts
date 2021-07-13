import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  form: FormGroup;
  constructor(
    private router: Router,
    public utils: UtilsService,
    public alertController: AlertController
  ) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.minLength(5)),
      password: new FormControl('', Validators.maxLength(20)),
      name: new FormControl('', Validators.maxLength(40)),
      invitacion: new FormControl('', Validators.maxLength(40)),
      repeatpassword: new FormControl(),
    });
  }
  async signup() {
    if (this.form.value.password !== this.form.value.repeatpassword) {
      return this.presentAlert('Oops', 'Las contraseñas deben de coincidir');
    }
    if (this.form.valid) {
      const body = {
        email: this.form.value.email,
        password: this.form.value.password,
        name: this.form.value.name,
        invitacion: this.form.value.invitacion,
      };
      await this.utils.signup(body).subscribe((res) => {
        let response: any = {};
        response = res;
        if (!response) {
          return this.presentAlert(
            'Oops',
            'que pena, ocurrio un problema, estamos solucionandolo, intenta mas tarde'
          );
        }
        if (response.error) {
          return this.presentAlert('Error', response.error.message);
        }
        if (response.message) {
          this.router.navigate([
            '/home',
            { data: JSON.stringify(response.user) },
          ]);
        }
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
}
