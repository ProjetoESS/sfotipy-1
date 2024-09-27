import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../../common/category';
import { MusicasService } from '../musicas.service';
import { PlaylistService } from '../playlist.service';

import { Music } from './../../../../common/music';
import { Playlist } from './../../../../common/playlist';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-root',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    private musicService: MusicasService,
    private categoryService: CategoryService) { }

  showLink: boolean = false;
  playlistId: number = 0;

  playlistCategories: Category[] = [];
  categories: Category[] = [];

  redirectaddmusic() {
    console.log('musica')
  }

  selectedPlaylist: Playlist = new Playlist(<Playlist>{});

  playlistSongs: Music[] = [];
  showShareLink() {
    this.showLink = !this.showLink;
  }

  ngOnInit(): void {
    const playId = this.route.snapshot.params["id"];
    this.playlistId = playId;
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params?.get('id');
        if (id) {
          this.playlistService.getPlaylistById(parseInt(id))
            .subscribe(
              as => {
                this.selectedPlaylist = as;
                for (var i in this.selectedPlaylist.musics) {
                  this.musicService.getMusicsById(parseInt(i))
                    .subscribe(
                      as => {
                        this.playlistSongs.push(as);
                        this.categoryService.getAllCategories().subscribe(
                          as => {
                            this.categories = as;
                            this.playlistCategories = this.categories.filter(c => this.selectedPlaylist.categories.includes(c.id));
                          },
                          msg => { alert(msg.message); }
                        );
                      },
                      msg => { alert(msg.message); }
                    );
                }
              },
              msg => { alert(msg.message); }
            );
        }
      }
    });
  }

  getCategories(): Category[] {
    return this.categories.filter(c => !this.playlistCategories.includes(c));
  }

  removeCategory(category: Category) {
    this.playlistService.deleteCategory(this.playlistId, category)
      .subscribe(
        ar => {
          if (ar) {
            var idx = this.playlistCategories.findIndex(ar => ar.name == category.name);
            console.log(idx);
            if (idx != -1) {
              this.playlistCategories.splice(idx, 1);
            }
          }
        }
      )
  }

  selectCategory(category: Category) {
    this.playlistService.addNewCategory(this.playlistId, category)
      .subscribe(
        ar => {
          if (ar) {
            this.playlistCategories.push(category);
            var idx = this.playlistCategories.findIndex(ar => ar.name == category.name);
            if (idx == -1) {
              this.playlistCategories.push(category);
            }
          }
        }
      )
  }

}
