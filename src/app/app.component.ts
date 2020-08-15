import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthenticationService } from './services/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AngularFireAuth, private authService: AuthenticationService){

  }
  title = 'tranings-app';
  login() {
    this.authService.doGoogleLogin();
    // this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(result) {
    //   var token = result.credential.providerId;
    //   console.log(token)
    //   var user = result.user;
    // });
    // firebase.auth().getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you the OAuth Access Token for that provider.
    //     var token = result.credential.accessToken;
    //   }
    //   var user = result.user;
    // });
  }
  logout() {
    this.authService.signOut();
  }
}
