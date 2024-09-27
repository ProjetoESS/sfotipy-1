import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../../../../common/playlist';
import { UserPlaylistsModule } from './user_playlists.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './user_playlists.component.html',
  styleUrls: ['./user_playlists.component.css']
})

export class UserPlaylistsComponent implements OnInit {
  user_id: number = 0;

    constructor(private router: Router, private playlistService : PlaylistService, private userService: UserService) {}

    numPlaylists: number = 0; // Número de playlists cadastradas
    playlists: Playlist[] = []

    redirectplaylist(id: number) {
      this.router.navigate(['/playlist/', id])
    }

    redirecionarParaCriarPlaylist() {
      this.router.navigate(['/criar_playlist']);
    }

    ngOnInit(): void {

        //console.log(this.playlistService.getUserPlaylists(this.user_id).subscribe(playlists => {
        //  this.playlists = playlists;
        //  this.numPlaylists = this.playlists.length;
        //}));
        //console.log("a");
        this.userService.getUserId().subscribe(userId => {
          
            //console.log(userId);
            
            this.user_id = userId;
            //console.log(this.playlistService.getUserPlaylists(userId));
            
            this.playlistService.getUserPlaylists(userId).subscribe(playlists => {
            this.playlists = playlists;
            console.log(playlists);
            
            this.numPlaylists = this.playlists.length; });
          
          })
        
  }
}
