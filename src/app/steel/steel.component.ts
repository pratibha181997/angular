import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-steel',
  templateUrl: './steel.component.html',
  styleUrls: ['./steel.component.css']
})
export class SteelComponent implements OnInit {
  formDataArray: any[] =[];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.formDataArray = this.dataSharingService.getData();
    console.log(this.formDataArray);
  }
}
