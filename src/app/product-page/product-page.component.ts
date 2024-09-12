import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { DataProduct } from '../InterFace/data-product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  getParamValue: any;
  getProduct: DataProduct[] = [];
  filterProductDaya: DataProduct[] = [];
  getsubCategorisOpration: any[] = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _GetDataService: GetDataService
  ) {}
  ngOnInit(): void {
    this.getParamValue = this._activatedRoute.snapshot.paramMap.get('name');
    this._GetDataService.productData.filter((ele: DataProduct) => {
      if (ele.pdCategory == this.getParamValue) {
        this.getProduct.push(ele);
        this.filterProductDaya.push(ele);
      }
    });

    this._GetDataService.subCategorisFilterData.filter((ele: any) => {
      if (ele.categories == this.getParamValue) {
        this.getsubCategorisOpration.push(ele);
      }
    });
  }

  filterSelect(data: any) {
    this.filterProductDaya = [];
    let getFilterData: any = data.target.value;
    if (getFilterData !== 'all') {
      this._GetDataService.productData.filter((ele: any) => {
        if (ele.pdSubCategory == getFilterData) {
          this.filterProductDaya.push(ele);
        }
      });
    } else {
      this.filterProductDaya = this.getProduct;
    }
  }
}
