import { Component} from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { Product } from 'src/models/product.model';

import { ProductService } from 'src/services/productService';

@Component({
    selector:"productShow-component",
    templateUrl:"productShow.component.html",
    styles:[".imgg:hover{opacity:0.7}"]
})
export class ProductShowComponent{
    public products:Product[]
    
    constructor(public prodService: ProductService, private cartService : Cart){
        this.prodService.getProducts().subscribe(data => {
            this.products = data;
            this.getViewProducts();
        })
        
    }
    getViewProducts(): Product[]{
        return  this.products.filter((product)=>product.discountOffer)   
    }
    
    addToCart(product:Product){
        console.log(this.cartService.lines);
        this.cartService.addLine(product);
        console.log(this.cartService.lines);
    }
   
}