import { GetDataService } from './../service/get-data.service';
import { Component, OnInit } from '@angular/core';
import { DataCategory } from '../InterFace/data-category';
import { DataProduct } from '../InterFace/data-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
      
  imageBanner = [
    {
      id: 1,
      img:"../../assets/images/banner/7dcc28ed89760319.webp" 
    },
    {
      id: 1,
      img:"../../assets/images/banner/9021283f0be266c1.webp" 
    },
    {
      id: 1,
      img:"../../assets/images/banner/ef637eb93bf1a887.webp" 
    },
    
  ]


  GetDataService:DataCategory[]=[] ;
  GetApplicationProducts:DataProduct[]=[] ;
  GetfashionProducts: DataProduct[] = [];
  GetHomeandfurnitureProducts:DataProduct[]=[] ;
  GetToysProducts:DataProduct[]=[] ;


  constructor(private _GetDataService:GetDataService){}


  ngOnInit(): void {
    this.GetDataService = this._GetDataService.categoriesData;
    this._GetDataService.productData.filter((ele: DataProduct) => {
      if (ele.pdCategory == "appliances") {
        this.GetApplicationProducts.push(ele)
       
      }
      if (ele.pdCategory == "fashion") {
        this.GetfashionProducts.push(ele)
       
      }
      if (ele.pdCategory == "homeandfurniture") {
        this.GetHomeandfurnitureProducts.push(ele)
       
      }
      if (ele.pdCategory == "toys") {
        this.GetToysProducts.push(ele)
       
     }
   })

  }

}
