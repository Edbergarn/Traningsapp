import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User, Exercise, Order } from './dataModels';
import { Observable } from 'rxjs';
import { UserId } from 'src/app/components/exercise/exercise.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  addData(collection: string, data: Object){
    return this.db.collection<any>(collection).add(data);
  }
  addUser(user: User){
    return this.db.collection<User>('users').add(user);
  }
  getCollection(collection: string){
    // return this.db.collection("cities").get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //   });
  // });
  }
  
}
