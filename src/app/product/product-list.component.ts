import { OnInit, Component, Injectable } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product-service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})

@Injectable()//Data Injection
export class ProductListComponent implements OnInit {
  products: Product[];
 
//DI constructor
constructor(private ps :ProductService)
{

}

loadProduct()
{
  this.products=this.ps.retrieveFromServer();  
}
  ngOnInit() {

//this.products=this.ps.retrieveFromServer();
     
   /* let p1 = new Product(1, "mobile", 50000, 20);
    let p2 = new Product(2, "ac", 20000, 20);
    let p3 = new Product(3, "tv", 10000, 30);

    this.products = [p1, p2, p3];
*/

  }

}