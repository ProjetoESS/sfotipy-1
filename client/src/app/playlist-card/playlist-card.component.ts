import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaylistCardComponent {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() id: string = '2';
}
