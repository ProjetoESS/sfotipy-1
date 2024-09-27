import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Playlist } from '../../../../common/playlist';
import { PlaylistService } from '../playlist.service';
import { Category } from '../../../../common/category';

@Component({
  selector: 'app-playlist-card-recomend',
  templateUrl: './playlist-card-recomend.component.html',
  styleUrls: ['./playlist-card-recomend.component.scss']
})
export class PlaylistCardRecomendComponent {
  constructor(private clipboard: Clipboard, private router: Router, private playlistService: PlaylistService) { };

  @Input() playlist: any;
  showShareMessage = false;

  @Output() play = new EventEmitter<any>();

  categorias: Category[] = [];

  ngOnInit() {
    this.playlistService.getPlaylistCategories(this.playlist.id).subscribe(
      as => { this.categorias = as; },
      msg => { alert(msg.message); }
    )
  }

  openPlaylistOnClick(event: Event, playlist: Playlist) {
    this.router.navigate(['/playlist/', playlist.id])
  }

  startPlayingOnClick(event: Event) {
    event.stopPropagation();
    this.play.emit(this.playlist);
  }

  likePlaylist(event: Event) {
    event.stopPropagation();
  }

  sharePlaylist(event: Event, playlist: Playlist) {
    event.stopPropagation();
    const str: string = 'localhost:4200/playlist/' + playlist.id;
    this.clipboard.copy(str);

    this.showShareMessage = true;
    setTimeout(() => {
      this.showShareMessage = false;
    }, 1000);
  }

  savePlaylist(event: Event) {
    event.stopPropagation();
  }

  executeAction(event: Event) {
    event.stopPropagation();
  }
}
