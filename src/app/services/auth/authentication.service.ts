import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
    ){}
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.auth
      .signInWithRedirect(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  signOut(){
    this.auth.signOut();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 100);
  }
}
