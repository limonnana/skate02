import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Skate02SharedModule } from 'app/shared/shared.module';

import { PasswordStrengthBarComponent } from './password/password-strength-bar.component';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordComponent } from './password/password.component';
import { PasswordResetInitComponent } from './password-reset/init/password-reset-init.component';
import { PasswordResetFinishComponent } from './password-reset/finish/password-reset-finish.component';
import { SettingsComponent } from './settings/settings.component';
import { accountState } from './account.route';
import { PictureComponent } from './picture/picture.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@NgModule({
  imports: [ImageCropperModule, Skate02SharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    PictureComponent,
    ProfilePictureComponent,
  ],
})
export class AccountModule {}
