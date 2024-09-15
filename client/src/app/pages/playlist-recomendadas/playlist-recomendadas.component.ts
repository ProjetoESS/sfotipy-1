import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {PlaylistService} from 'src/app/playlist.service';
import { UserService } from 'src/app/user.service';

import {Category} from '../../../../../common/category';
import {Music} from '../../../../../common/music';
import {Playlist} from '../../../../../common/playlist';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})
export class PlaylistRecomendadasComponent implements OnInit {
  constructor(private playlistService: PlaylistService, private titleService:Title, private userService : UserService) {}

  playlists: Playlist[] = [];
  playlistsRecomendadas: Playlist[] = [];
  playlistsUser: Playlist[] = [];
  userId: number = 0;


  ngOnInit(): void {
    this.titleService.setTitle("Explorar")
    this.playlistService.getPlaylists().subscribe(
        (as) => {
          this.playlists = as;
          
          this.userService.getUserId().subscribe(
            as => { this.userId = as; },
            msg => { alert(msg.message); }
          )

          this.playlistsUser = this.playlists.filter(playlist => playlist.ownerId == this.userId);
          this.playlistService.recommendPlaylists(this.playlistsUser, this.playlists).subscribe(
            as => { this.playlistsRecomendadas = as; },
            msg => { alert(msg.message); }
          );
        },
        (msg) => {
          alert(msg.message);
        });
  }

  selectedPlaylist: any;

  onPlay(playlist: any) {
    // Stop playing any previously selected playlist
    if (this.selectedPlaylist) {
      this.selectedPlaylist.isPlaying = false;
    }
    if (this.selectedPlaylist == playlist) {
      this.selectedPlaylist.isPlaying = false;
    } else {
      // Set the new selected playlist and start playing
      this.selectedPlaylist = playlist;
      this.selectedPlaylist.isPlaying = true;
    }
  }
}
