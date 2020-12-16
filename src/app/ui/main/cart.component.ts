import { CartLine } from './../../../models/cart.model';

import { Component } from "@angular/core";
import { Cart } from "src/models/cart.model";
import { Product } from 'src/models/product.model';
import { range } from 'rxjs';
import { ConnectionService } from 'src/services/connection.service';

@Component({
    selector:"cart-component",
    templateUrl:"cart.component.html"
})

export class CartComponent{
    public connected : boolean = true;
    constructor(public cartService:Cart, public connection : ConnectionService){
        this.connected = this.connection.connected;
        connection.Changes.subscribe((state) => this.connected = state);
    }

    quantityChange(product:Product, newQuantity:number){
        this.cartService.updateQuantity(product, newQuantity);
    }

   
}