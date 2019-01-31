import { Product } from './product';
import { Injectable } from '@angular/core';
//import { providerDef } from '@angular/core/src/view';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
 products:Product[];
    //injecting Angular's HttpClient API
    constructor(private http: HttpClient) {

    }
    sendToServer(product: Product) {
        //our code to communicate with the server will be here
    }


    retrieveFromServer(): Product[] {
        //our code to communicate with the server will be here
        let url = 'http://localhost:8081/pagination-ajax/ProductControllerServlet'
        
        this.http.get<Product[]>(url).subscribe(data => {
            this.products = data;
        });
return this.products;

        /* let p1 = new Product(1, "mobile", 50000, 20);
         let p2 = new Product(2, "ac", 20000, 20);
         let p3 = new Product(3, "tv", 10000, 30);
 
         let products = [p1, p2, p3];
         return products;*/
    }
}