import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ParticleProvider } from '../../providers/particle/particle';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-controls',
  templateUrl: 'controls.html'
})
export class ControlsPage {
  public engine_glow: number = 255;
  public engine_flicker: number = 40;
  private subscription: any = null;
  
  constructor(public navCtrl: NavController, public particle: ParticleProvider, private alertCtrl: AlertController) {
  }

  updateEngine() {
    console.log("Engine glow", this.engine_glow);
    console.log("Engine flicker", this.engine_flicker);
    this.particle.callFunction("engine", this.engine_glow + "," + this.engine_flicker).then( 
        (data) => {
            console.log("engine function call success", data);
        },
        (error) => {
            console.log("engine function call error", error);
            let alert = this.alertCtrl.create({
                title: "Error",
                subTitle: "Could not change engine settings",
                buttons: ['Dismiss']
            });
            alert.present();
        }
    );
  }

  powerDown() {
    console.log("Soft power down");
    this.particle.callFunction("powerdown").then(
        (data) => {
            console.log("powerdown function call success", data);
        },
        (error) => {
            console.log("powerdown function call error", error);
            let alert = this.alertCtrl.create({
                title: "Error",
                subTitle: "Could not power down Imperial Raider",
                buttons: ['Dismiss']
            });
            alert.present();
        }
    );
  }

}
