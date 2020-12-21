import { ProductService } from './../../../services/productService';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Order } from 'src/models/order.model';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-manage-oder',
  templateUrl: './manage-oder.component.html',
  styleUrls: ['./manage-oder.component.css'],
  
})
export class ManageOderComponent {

  orders:Order[];
  orderData:Order[];
  page = 1;
  pageSize = 3;
 

  constructor(public orderService: OrderService, public prodService:ProductService) { 
     this.prodService.getOrders().subscribe(orders =>{
      this.orders = orders;
      console.log(this.orders);
      this.refreshCountries();
     });
      
    
  }
  

  refreshCountries() {
    console.log(this.orders);
    this.orderData = this.orders
      .map((order, i) => ({ ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
