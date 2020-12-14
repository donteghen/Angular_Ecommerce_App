import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Order } from 'src/models/order.model';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/models/product.model';
const PROTOCOL = "http";
const PORT = 3000;
@Injectable()
export class ProductService {
    baseUrl: string;
    
    constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    
    }
    getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(this.baseUrl + "products")
     .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
    
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "products", product)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
    updateProduct(product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`, product)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + "orders", )
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
      
    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,order)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }   
    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`)
        .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }
         
}