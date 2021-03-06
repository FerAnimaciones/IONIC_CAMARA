import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageData: String;
  @Input('useURI') useURI: Boolean = true;
  constructor(public navCtrl: NavController, private camera: Camera) {
  }
  getPicture(sourceType) {
    this.camera.getPicture({
      quality: 50,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      destinationType: this.useURI ? this.camera.DestinationType.FILE_URI :
        this.camera.DestinationType.DATA_URL,
      targetWidth: 800,
      targetHeight: 800,
      sourceType: sourceType
    }).then((imageData) => {
      if (this.useURI) {
        this.imageData = imageData;
      }
      else {
        this.imageData = "data:image/jpeg;base64," + imageData;
      }
    }, (err) => {
      console.log(err);
    });
  }//getPicture
}

