import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../../../../common/playlist';

@Component({
  selector: 'app-playlist-em-alta',
  templateUrl: './playlist-em-alta.component.html',
  styleUrls: ['./playlist-em-alta.component.scss']
})
export class PlaylistEmAltaComponent {
  mostAccessedPlaylist : Playlist[]= [];


  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe(as => {
      this.mostAccessedPlaylist = as
      this.mostAccessedPlaylist.sort((a, b) => b.accessPlaylits - a.accessPlaylits).slice(0, 4);
    });
  }
  getFirstPlaylistTitle(): string {
    return this.mostAccessedPlaylist[0].image;
  }
  getSecondPlaylistTitle(): string {
    return this.mostAccessedPlaylist[1].image;
  }
  getThirdPlaylistTitle(): string {
    return this.mostAccessedPlaylist[2].image;
  }
  getFourthPlaylistTitle(): string {
    return this.mostAccessedPlaylist[3].image;
  }
  getFirstPlaylistLink(): string {
    return this.mostAccessedPlaylist[0].link;
  }
  getSecondPlaylistLink(): string {
    return this.mostAccessedPlaylist[1].link;
  }
  getThirdPlaylistLink(): string {
    return this.mostAccessedPlaylist[2].link;
  }
  getFourthPlaylistLink(): string {
    return this.mostAccessedPlaylist[3].link;
  }
}