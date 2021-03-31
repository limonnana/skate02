import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureDTO } from 'app/core/user/pictureDTO.model';
import { UserService } from 'app/core/user/user.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'jhi-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  login?: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.login = params['login'];
    });
  }

  savePicture(): void {
    const pictureDTO = new PictureDTO(this.login, this.croppedImage);
    this.userService.addProfilePicture(pictureDTO).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }
  imageLoaded(): void {
    // show cropper
  }
  cropperReady(): void {
    // cropper ready
  }
  loadImageFailed(): void {
    // show message
  }

  private onSaveSuccess(): void {
    // this.previousState();
    this.router.navigate(['/account/settings']);
  }

  private onSaveError(): void {}

  previousState(): void {
    window.history.back();
  }
}
