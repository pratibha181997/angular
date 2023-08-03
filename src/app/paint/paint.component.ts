import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {
  formDataArray: any[] =[];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.formDataArray = this.dataSharingService.getData();
    console.log(this.formDataArray);
  }

}
