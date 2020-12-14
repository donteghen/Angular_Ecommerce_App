import { Injectable } from "@angular/core";
import { ProductService } from 'src/services/productService';
import { Product } from './product.model';


@Injectable()
export class ProductRepository {
public products = new Array<Product>();
private categories= new Array<string>();
    constructor(private productService: ProductService) {
        productService.getProducts().subscribe(data => {
            this.products = data;
            console.log(this.products);
            this.categories = data.map(p => p.category)
            .filter((c, index, array) => array.indexOf(c) == index).sort();
            console.log(this.categories);

            console.log(this.getProducts("Chess"));
        });
    }
    getProducts(category: string = null): Product[] {
        return this.products
        .filter(p => category == null || category == p.category);
        }
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
        }
    getCategories(): string[] {
        return this.categories;
        }
    saveProduct(product: Product) {
        if (product.id == null || product.id == 0) {
            this.productService.saveProduct(product)
            .subscribe(p => this.products.push(p));
        } 
        else {
            this.productService.updateProduct(product)
            .subscribe(p => {
            this.products.splice(this.products.
            findIndex(p => p.id == product.id), 1, product);
            });
        }
    }
    deleteProduct(id: number) {
        this.productService.deleteProduct(id).subscribe(p => {
        this.products.splice(this.products.
        findIndex(p => p.id == id), 1);
        })
    }
 
}