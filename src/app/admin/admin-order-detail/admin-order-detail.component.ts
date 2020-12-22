import { NgForm } from '@angular/forms';
import { ProductService } from 'src/services/productService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent {
order:Order = new Order();
  constructor(public activeRoute:ActivatedRoute, public prodService:ProductService, public router:Router) { 
    const id = this.activeRoute.snapshot.params['id'];
    this.prodService.getOrders().subscribe(data =>{
      let ord = data.find(o => o.id == id);
      Object.assign(this.order, ord);
    });
  }

    saveChanges(form:NgForm){
      
      this.prodService.updateOrder(this.order).subscribe();
      this.router.navigateByUrl('/admin-order');
    }
}
