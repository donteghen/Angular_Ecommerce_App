import { OrderService } from './../../../services/order.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/models/order.model';

@Component({
    selector:"checkout-component",
    templateUrl:"checkout.component.html"
})

export class CheckoutComponent{
    orderSent: boolean = false;
    submitted: boolean = false;
    constructor(public orderService: OrderService, public order: Order) {
        console.log(this.orderService);
    }
    
    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
        this.orderService.saveOrder(this.order).subscribe(order => { 
            this.order.cart.clear;
            this.orderSent = true;
            this.submitted = false;
        });
        }
    }
}