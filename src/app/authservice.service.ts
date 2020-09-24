import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {UserInfo} from "./pages/shared/user-info.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(public fireservices: AngularFirestore) {
  }

  getAllData(): Observable<UserInfo[]> {
    return this.fireservices.collection<UserInfo>('items').snapshotChanges().pipe(map(actions => {
      return actions.map<UserInfo>(actions => {
        const data = actions.payload.doc.data() as UserInfo;
        return {
          id: actions.payload.doc.id,
          name: data.name,
          UserName:data.UserName,
          addres: data.addres,
          age: data.age
        };
      })
    }));
  }

  create_Newemployee(record) {
   return this.fireservices.collection('items').add(record)
  }


  deleteById(id) {
    if(confirm){
      this.fireservices.doc<UserInfo>('items/' + id)
    .delete()
    .then(data => {
      debugger;
    })
    .catch(err => {
      debugger;
      window.alert()
    })
    .finally(() => {
      debugger
    })
    }
  }

}

