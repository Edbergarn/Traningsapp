import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { User } from 'src/app/services/firebase/dataModels';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface UserId extends User { id: string; }

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<UserId[]>;
  constructor(private firestoreService: FirestoreService, private readonly afs: AngularFirestore) {
    // var users = this.firestoreService.getUsers();

    this.userCollection = afs.collection<User>('users');

    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  ngOnInit(): void {
  }
  addUser(){
    let user: User = {name: 'Ola', googleToken: "asdoaje123jsddlx", email: 'test.testsson@test.se'};
    this.firestoreService.addData('users', user);
  }

}
