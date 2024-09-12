import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }


  // store the data in the storage
  storeCartData(data: any) {
    let cartData = JSON.stringify(data);
    localStorage.setItem('cartData', cartData);
  }

  // get the data from the storage
  getCartData() {
    let getData : any= localStorage.getItem('cartData');
    return JSON.parse(getData);
  }
}
