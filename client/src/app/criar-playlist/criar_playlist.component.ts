import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { PlaylistService } from '../playlist.service';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './criar_playlist.component.html',
  styleUrls: ['./criar_playlist.component.css']
})
export class CriarPlaylistComponent implements OnInit {
  user_id: number = 0;
  id: number = 6
  successMessage: string = '';
  nome_playlist: string = ''
  imagem_playlist: string = ''
  publicavel: string = ''
  constructor(private playlistService: PlaylistService, private router: Router, private userService: UserService) { }

  criarPlaylist(event: Event) {
    event.preventDefault();
    this.nome_playlist = (document.querySelector('.playlist_input_name') as HTMLInputElement).value
    this.imagem_playlist = (document.querySelector('.picture_input') as HTMLInputElement).value
    this.publicavel = String((document.querySelector('.publicar_input') as HTMLInputElement).checked)
    if (this.publicavel == 'true') {
      this.publicavel = 'public'
    } else {
      this.publicavel = 'private'
    }

    if (!this.nome_playlist) {
      alert('Preencha o nome da playlist');
      return;
    }


    /* if (this.playlistService.verificarNomePlaylistExistente(nome_playlist.value)) {
       console.log('Já existe uma playlist com esse nome');
       exibe mensagem de erro ou faz outra ação apropriada
     } else {*/
    const playlist = new Playlist(<Playlist><unknown>{
      "id": 0,
      "ownerId": this.user_id,
      "name": this.nome_playlist,
      "categories": [],
      "musics": [],
      "image": this.imagem_playlist,
      "link": "",
      "owner": "",
      "followers": [],
      "availability": this.publicavel
    })

    const novaPlaylist = this.playlistService.addPlaylist(playlist).subscribe(newPlaylists => {
      console.log(newPlaylists)
      alert('Playlist criada com sucesso')
      this.router.navigate(['/minhas_playlists']);
    });
  }

  ngOnInit(): void {
    const input_pic: HTMLElement | null = document.querySelector('.picture_input');
    const pictureImage = document.querySelector('.picture_image')
    if (input_pic && pictureImage) {
      input_pic.addEventListener('change', function (e) {
        const inputTarget = e.target as HTMLInputElement;
        if (inputTarget.files) {
          const file = inputTarget.files[0];
          const reader = new FileReader();
          reader.addEventListener('load', function (e) {
            const readerTarget = e.target
            if (readerTarget && readerTarget.result) {
              const img = document.createElement('img');
              img.src = readerTarget.result as string
              img.classList.add('picture_img')

              pictureImage.innerHTML = '';
              pictureImage.appendChild(img)
            }
          })
          reader.readAsDataURL(file);
        }
      })
    };

    this.userService.getUserId().subscribe(userId => {
      this.user_id = userId
      //console.log(this.user_id);
      
    });
  }
}
