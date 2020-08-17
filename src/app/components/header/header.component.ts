import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user;

  constructor(
    public auth: AngularFireAuth, 
    private authService: AuthenticationService,
    // private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.auth.currentUser;
    console.log(this.user)
  }
  logout() {
    this.authService.signOut();
    // this.router.navigate(['login']).then( (e) => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }

}
