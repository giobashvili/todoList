import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';
import { DialogData } from './dialog.model';


@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {

  dialogData: DialogData;
  isModalVisibe:boolean;

  constructor(private dialogService:DialogService) { }



  ngOnInit(): void {
     this.dialogService.showDialog$.subscribe(x => {
       this.dialogData = x;
       console.log(x)
       this.isModalVisibe = true;
     })
     }

     close() {
       this.isModalVisibe = false;
     }

}
