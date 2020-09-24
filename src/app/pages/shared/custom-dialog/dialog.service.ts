import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {DialogData} from "./dialog.model";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _showDialog$:Subject<DialogData> = new Subject<DialogData>()

  showDialog$:Observable<DialogData>;

  constructor() {
   this.showDialog$ = this._showDialog$;
  }

  showDialog(data: DialogData){
    this._showDialog$.next(data);
  }
}
