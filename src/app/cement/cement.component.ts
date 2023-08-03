import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-cement',
  templateUrl: './cement.component.html',
  styleUrls: ['./cement.component.css']
})
export class CementComponent implements OnInit {

  formDataArray: any[] =[];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.formDataArray = this.dataSharingService.getData();
    console.log(this.formDataArray);
  }

}
