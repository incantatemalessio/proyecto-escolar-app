import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form: FormGroup;
  constructor(
    private router: Router,
    public utils: UtilsService,
    public alertController: AlertController
  ) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.minLength(5)),
      password: new FormControl('', Validators.maxLength(20)),
    });
  }

  async navigate() {
    if (this.form.valid) {
      const body = {
        email: this.form.value.email,
        password: this.form.value.password,
      };
      await this.utils.login(body).subscribe((res) => {
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

  register() {
    this.router.navigate(['/register']);
  }

  async globalCalifications() {
    return this.router.navigate(['/califications']);
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
