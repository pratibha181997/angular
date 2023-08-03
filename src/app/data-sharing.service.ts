import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private storageKey = 'formDataArray';

  constructor() { }

  private getStoredData(): any[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  private setStoredData(data: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  setData(formData: any) {
    const storedData = this.getStoredData();
    storedData.push(formData);
    this.setStoredData(storedData);
  }

  getData() {
    return this.getStoredData();
  }
}
