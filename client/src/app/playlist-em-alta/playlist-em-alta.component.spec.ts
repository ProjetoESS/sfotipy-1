import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEmAltaComponent } from './playlist-em-alta.component';

describe('PlaylistEmAltaComponent', () => {
  let component: PlaylistEmAltaComponent;
  let fixture: ComponentFixture<PlaylistEmAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistEmAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistEmAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
