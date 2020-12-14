import { Component} from '@angular/core';
import { Product } from 'src/models/product.model';

import { ProductService } from 'src/services/productService';

@Component({
    selector:"productShow-component",
    templateUrl:"productShow.component.html",
    styles:[".card:hover{opacity:0.7}"]
})
export class ProductShowComponent{
    public products:Product[]
    
    constructor(public prodService: ProductService){
        this.prodService.getProducts().subscribe(data => {
            this.products = data;
            this.getViewProducts();
        })
        
    }
    getViewProducts(): Product[]{
        return  this.products.filter((product)=>product.discountOffer)   
    }
    

   
}