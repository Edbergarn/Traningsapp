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
  login(){
    this.authService.doGoogleLogin();
  }

  loginGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(userCredentials => {
        /* LOGIN OK */
        this.router.navigateByUrl('');
      })
      .catch(err => {
        /* LOGIN ERR */
        alert(err.message);
      })
      .finally(() => {
        /* DO SOMETHING IN ANY CASE */
      });
  }

  signOut(){
    this.authService.signOut();
  }
  
}

