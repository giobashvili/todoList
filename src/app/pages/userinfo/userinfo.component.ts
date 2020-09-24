import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from "../../authservice.service";
import {AngularFirestore} from "@angular/fire/firestore";

import {UserInfo} from "../shared/user-info.model";
import { DialogService } from '../shared/custom-dialog/dialog.service';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  EmployeeName: string;
  EmployeeUserName:string;
  EmployeeAge: number;
  EmployeeAddres: string;
  showAdd: boolean;
  infoData: UserInfo;

  userInfos: UserInfo[];



  titles: any = [
    'Name',
    'UserName',
    ''
  ]

  constructor(private service: AuthserviceService, private firestore: AngularFirestore,private dialogService:DialogService) {
    this.getData();

  }

  ngOnInit(): void {
  }

  getData() {
    this.service.getAllData().subscribe(res =>{
      this.userInfos = res;
    })
  }

  create() {
    let record = {
      'name': this.EmployeeName,
      'UserName': this.EmployeeUserName,
      'age': this.EmployeeAge,
      'addres': this.EmployeeAddres,
    };


    this.service.create_Newemployee(record);
      this.EmployeeName = '';
      this.EmployeeUserName = '';
      this.EmployeeAge = undefined;
      this.EmployeeAddres = '';
      this.showAdd = false;

  }

  viewInfo(info:UserInfo) {
    this.infoData = info;
    this.dialogService.showDialog({
      address: info.addres,
      age: info.age,
      name: info.name,
      username: info.UserName
      }
    )
  }

  Delete(id) {

     this.service.deleteById(id);
  }
}
