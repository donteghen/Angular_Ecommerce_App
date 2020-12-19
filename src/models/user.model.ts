import { Injectable } from '@angular/core';
import { Order } from './order.model';
@Injectable()
export class User {
    id: string;
    name: string;
    surName:string;
    password:string;
    email:string;
    emailVerified: boolean;  
    orders?: Order[];
}