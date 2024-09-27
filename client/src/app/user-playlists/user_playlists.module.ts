import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPlaylistsComponent } from './user_playlists.component';

@NgModule({
  declarations: [
    UserPlaylistsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserPlaylistsComponent
  ]
})
export class UserPlaylistsModule { }
