import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';

import { AnimeAppState } from '../../../core/redux/store';
import { SignupComponent } from './../../../user/components/signup/signup.component';
import { SignInComponent } from '../../../user/components/sign-in/sign-in.component';
import { AuthenticationService } from './../../../user/services/authentication.service';
import { User } from './../../../user/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @select() animes;
  @Input('title') headerTitle: string;
  today: number = Date.now();
  currentUser: User;

  signUpModal: SignupComponent;
  signInModal: SignInComponent;

  constructor(
    private ngRedux: NgRedux<AnimeAppState>, 
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() { }

  logout() {
    this.authenticationService.logout();
  }

}
