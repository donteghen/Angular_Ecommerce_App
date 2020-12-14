import { Injectable } from '@angular/core';
import { Order } from './order.model';
@Injectable()
export class User {
    id: string;
    name: string;
    surName:String;
    password:string;
    email:string;
    orders?: Order[];
}