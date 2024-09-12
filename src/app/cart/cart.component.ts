import { Router } from '@angular/router';
import { DataStorageService } from './../service/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(private _DataStorageService: DataStorageService ,private Router:Router) { }
  getCartData: any;
  storeCartData: any = [];
  totalAmount: number = 0;
  totalcart : number = 0;

 ngOnInit(): void {
   
   this.getCartData = this._DataStorageService.getCartData();
   this.totalcart = this.getCartData ? this.getCartData.length : 0;
   if (this.getCartData) {
    this.getCartData.filter((ele: any) => {
      this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
    })
   }
   
 }

  RemoveCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem('cartData');

    this.storeCartData = [];

    this.getCartData.filter((ele: any) => {
        if (ele.pdId != data.pdId) {
          this.storeCartData.push(ele);
          this.totalAmount = ele.pdPrice + this.totalAmount;
        }
    });
    this._DataStorageService.storeCartData(this.storeCartData);
    this.getCartData = this._DataStorageService.getCartData();
    this.totalcart = this.getCartData.length;
  }
  
  plusMinsCount(data :any, type :any) {
    

    this.storeCartData=[];
      var plusMinusValue = data.plusMinusCounter;
      this.totalAmount=0;
      if(type=='minus')
      {
          let minusCount = plusMinusValue - 1;
          this.getCartData.filter((ele:any)=>{
              if(data.pdId == ele.pdId)
              {
                ele['plusMinusCounter'] = minusCount;
              }
              this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
          });

          this.storeCartData = this.getCartData;
          this._DataStorageService.storeCartData(this.storeCartData);
          this.getCartData = this._DataStorageService.getCartData();

      }
      if(type=='plus')
      {
          let minusCount = plusMinusValue + 1;
          this.getCartData.filter((ele:any)=>{
              if(data.pdId == ele.pdId)
              {
                ele['plusMinusCounter'] = minusCount;
              }
              this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
          });

          this.storeCartData = this.getCartData;
          this._DataStorageService.storeCartData(this.storeCartData);
          this.getCartData = this._DataStorageService.getCartData();

      }


  }


  orderClick() {
    localStorage.removeItem('cartData');
    this.Router.navigate(['/']);
  }
}
