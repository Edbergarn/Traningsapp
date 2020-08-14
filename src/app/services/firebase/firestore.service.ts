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
    return this.db.collection(collection).add(data);
  }
  
}
