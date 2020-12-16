
import { ProductService } from 'src/services/productService';
import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';
import { Cart } from 'src/models/cart.model';

@Component({
    selector:"store-component",
    templateUrl:"store.component.html",
    styles:[".page{position:y}",".imgg:hover{opacity:0.6}"] 
})
export class StoreComponent{
    public products:Product[];
    public categories: string[];
    selectedCat:string = null;
    minPrice:number = 10;
    maxPrice:number = 10000;
    sortType: string[] = ["Ascending Price", "Descending Price"];
    sortChoice:string = null;
    currPage:number = 1;
    itemPerView:number = 9;
    constructor(public prodService: ProductService, private cartService:Cart){
        this.prodService.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category).filter((p, index, array) => array.indexOf(p) == index);
        })
        
    }
    getProducts():Product[]{
        if(this.sortChoice === "Ascending Price"){
            return this.products
            .filter(p => this.selectedCat == null || this.selectedCat == p.category )
            .filter(p => this.minPrice < p.price && this.maxPrice > p.price)
            .sort((a, b) => a.price - b.price);
        }
        else if(this.sortChoice === "Descending Price"){
            return this.products
            .filter(p => this.selectedCat == null || this.selectedCat == p.category )
            .filter(p => this.minPrice < p.price && this.maxPrice > p.price)
            .sort((a, b) => a.price - b.price).reverse();
        }
        else{
            return this.products
            .filter(p => this.selectedCat == null || this.selectedCat == p.category )
            .filter(p => this.minPrice < p.price && this.maxPrice > p.price)
            
        }
    }
    
    getSortedProducts(choice:string){
        switch(choice){
            case "Ascending Price":
                this.sortChoice = "Ascending Price";
                break;
            
            case "Descending Price":
                return this.sortChoice = "Descending Price";
                break;  
                 
        }
    }

    addToCart(product:Product){
        console.log(this.cartService.lines);
        this.cartService.addLine(product);
        console.log(this.cartService.lines);
    }
}