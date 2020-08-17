import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthenticationService } from './services/auth/authentication.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
// import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

/*material jazz */
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { HomescreenComponent } from './components/pages/homescreen/homescreen.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    NavigationBarComponent,
    SettingsComponent,
    LoginComponent,
    HomescreenComponent,
    ScheduleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
     
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    // AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
