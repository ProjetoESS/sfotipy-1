import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompartilhamentoComponent } from './compartilhamento/compartilhamento.component';
import { CriacaoCategoriasComponent } from './criacao-categorias/criacao-categorias.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PageBuscaComponent } from './pages/page-busca/page-busca.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistRecomendadasComponent } from './playlist-recomendadas/playlist-recomendadas.component';
import { PlaylistCardRecomendComponent } from './playlist-card-recomend/playlist-card-recomend.component';
import { MusicsFilterPipe } from './musics-filter.pipe';

import { HomepageComponent } from './homepage/homepage.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { ProfilepageComponent } from './taskbar/profilepage/profilepage.component';
import { PlaylistEmAltaComponent } from './playlist-em-alta/playlist-em-alta.component';
import { MusicasEmAltaComponent } from './musicas-em-alta/musicas-em-alta.component';


@NgModule({
  declarations: [
    AppComponent,
    CompartilhamentoComponent,
    CriacaoCategoriasComponent,
    NavbarComponent,
    PlayerComponent,
    PlaylistCardComponent,
    MusicCardComponent,
    PageBuscaComponent,
    PlayerComponent,
    AppComponent,
    PlaylistRecomendadasComponent,
    PlaylistCardRecomendComponent,
    MusicsFilterPipe,
    HomepageComponent,
    TaskbarComponent,
    ProfilepageComponent,
    PlaylistEmAltaComponent,
    MusicasEmAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'busca',
        component: PageBuscaComponent
      },
      {
        path: 'explorar',
        component: PlaylistRecomendadasComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
