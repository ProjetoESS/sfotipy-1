import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show: boolean = false;
  isLogged: boolean = false;

  constructor(private loginService: LoginService) { }

  showProfile(event?: boolean): void {
    this.show = !this.show;
    if ((typeof event !== 'undefined')) this.show = event;
  }

  toLogin(): void {
    //To do
  }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe(newStatus => {
      this.isLogged = newStatus;
    });
    /*
    this.userService.getUserById(this.userId)
      .pipe(
        tap({
        next: as => { this.user = as; },
        error: msg => { alert(msg.message); }
        })
      )
      .subscribe();
    */
  }
}
