import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {

  formDataArray: any[] =[];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.formDataArray = this.dataSharingService.getData();
    console.log(this.formDataArray);
  }
}
