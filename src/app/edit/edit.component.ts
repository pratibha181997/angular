import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Editform: any;
  formDataArray: any[] = [];

  constructor(private fb: FormBuilder, private dataSharingService: DataSharingService, private route:Router) {
    this.Editform = fb.group({
      'category': [''],
      'name': [''],
      'gst': [''],
      'unit': [''],
      'hsn': [''],
      'Description': [''],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const formData = this.Editform.value;
    console.log(formData);

    this.formDataArray.push(formData);
    this.dataSharingService.setData(this.formDataArray);
    this.Editform.reset();
    this.route.navigate(['/pipe']);
  }
}
