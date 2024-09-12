import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from './../service/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private _DataStorageService: DataStorageService) { }
  
 @Input() getCartData = 0;
  ngOnInit(): void {
    var data = this._DataStorageService.getCartData();
    this.getCartData =data ?data.length : 0;
  }
}
