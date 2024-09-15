import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasEmAltaComponent } from './artistas-em-alta.component';

describe('ArtistasEmAltaComponent', () => {
  let component: ArtistasEmAltaComponent;
  let fixture: ComponentFixture<ArtistasEmAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistasEmAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistasEmAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
