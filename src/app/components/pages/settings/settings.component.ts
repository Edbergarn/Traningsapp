import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  users: Observable<any[]>

  constructor(firestore: AngularFirestore) {
    this.users = firestore.collection('users').valueChanges();
   }

  ngOnInit(): void {
  }

}
