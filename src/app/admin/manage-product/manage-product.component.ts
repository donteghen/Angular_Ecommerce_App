import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Product } from 'src/models/product.model';
import { ProductService } from 'src/services/productService';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
  providers:[DecimalPipe]
})
export class ManageProductComponent {

  products$:Observable<Product[]>
  products:Product[];
  prodData:Product[];
  filter = new FormControl('');
  page = 1;
  pageSize = 4;
 

  constructor(public prodService: ProductService, pipe:DecimalPipe) { 
    this.prodService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.refreshCountries();
    });
    this.products$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
    
  }
  search(text:string, pipe:PipeTransform):Product[]{
    return this.prodData.filter(prods => {
      console.log(this.products);
      const term = text.toLowerCase();
      return prods.name.toLowerCase().includes(term)
          || pipe.transform(prods.category).includes(term)
          || pipe.transform(prods.description).includes(term);
    });
  }

  refreshCountries() {
    console.log(this.products);
    this.prodData= this.products
      .map((product, i) => ({ ...product}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
