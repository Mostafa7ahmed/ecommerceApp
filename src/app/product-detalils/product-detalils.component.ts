import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';
import { DataProduct } from '../InterFace/data-product';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-product-detalils',
  templateUrl: './product-detalils.component.html',
  styleUrls: ['./product-detalils.component.scss'],
})
export class ProductDetalilsComponent implements OnInit {
  constructor(private _GetDataService: GetDataService , private router:Router, private Route:ActivatedRoute , private _DataStorageService:DataStorageService) {}
  getProductDetalis: any;
  getParamValue: any;
  storeCartData: any = [];
  inCart: boolean = false;

  ngOnInit(): void {
    this.getParamValue = this.Route.snapshot.paramMap.get("id");
    var getValue = this._DataStorageService.getCartData();
    this.storeCartData = getValue ? getValue : [];
      this._GetDataService.productData.filter((ele:DataProduct) => {
      if (ele.pdId == this.getParamValue) {
        this.getProductDetalis = ele;
      }
      });
    
    
    this.storeCartData.filter((ele: DataProduct) => { 
      if (ele.pdId == this.getParamValue) {
        this.inCart = true;
      }
    
    })
  }


  addToCart(data: any) {
    data['plusMinusCounter'] = 1;
    this.storeCartData.push(data)
    this._DataStorageService.storeCartData(this.storeCartData);
    this.inCart = true;
  }
}
