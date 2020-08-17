import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  user;
  constructor(
    public auth: AngularFireAuth, 
    private authService: AuthenticationService,
    private router: Router
    
    ){
    this.user = auth.user;
  }
  loginWithGoogle(){
    this.authService.doGoogleLogin();
  }

  signOut(){
    this.authService.signOut();
  }
  
}

