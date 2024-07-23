import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public count: number = 0;
  constructor() {
    console.log("Service Loaded")
  }

  incrementValue() {
    this.count = this.count + 1;
    console.log(this.count);
  }
}
