
import { ProductService } from 'src/services/productService';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { ActivatedRoute} from '@angular/router';
import { Product } from 'src/models/product.model';

@Component({
    selector:"productDetail-component",
    templateUrl:"productDetail.component.html",
    styles:["span:hover{opacity:0.6}"]
})

export class ProductDetailComponent implements OnInit{
    // mockup data part
    imgArray : string[] = ["https://source.unsplash.com/random", "https://source.unsplash.com/daily", "https://source.unsplash.com/weekly","https://source.unsplash.com/random"];
    activeSrc : string = this.imgArray[0];
    quantity : number = 1;
    currentRate:number = 7;
    colors:string[]=["red", "blue", "green", "black", "orange"];
    activeColor: string = this.colors[0];
    sizes:string[] = ["2XL", "XL", "L", "M", "S", "XS"];
    activeSize : string = this.sizes[0];

    // working part
    product : Product;
    constructor(public prodService : ProductService, public cart:Cart, private activeRoute: ActivatedRoute){
        
    }
    ngOnInit(){
        const id = +this.activeRoute.snapshot.paramMap.get('id');
         this.prodService.getProducts().subscribe(data =>{
         this.product = data.find(p => p.id === id)
        });
    }
    srcChanged(src:string){
        this.activeSrc = src;
    }
}