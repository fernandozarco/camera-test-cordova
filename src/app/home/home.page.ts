import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image: string;
  takePhoto = true;

  constructor(private camera: Camera) { }

  tomarFoto(tomarFoto) {

    const cameraOptions: CameraOptions = {
      quality: 35,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      sourceType: (tomarFoto) ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
    }

    this.camera.getPicture(cameraOptions).then((res) => {
      let base64 = 'data:image/jpeg;base64,' + res;
      this.image = base64;
      console.log('IMAGE');
      console.log(this.image);
    }, (error) => {
      alert(error);
    });
  }

}
