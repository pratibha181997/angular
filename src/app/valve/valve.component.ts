import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-valve',
  templateUrl: './valve.component.html',
  styleUrls: ['./valve.component.css']
})
export class ValveComponent implements OnInit {
  formDataArray: any[] =[];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.formDataArray = this.dataSharingService.getData();
    console.log(this.formDataArray);
  }
}
