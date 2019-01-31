import { OnInit, Component, Injectable } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product-service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})

@Injectable()//Data Injection(DI)
export class ProductListComponent implements OnInit {
  products: Product[];
  currentPosition:number=1;
  pageSize:number=3;

 
//DI constructor
constructor(private ps :ProductService)
{

}

loadProduct()
{
  this.ps.retrieveFromServer().subscribe(data => {
    this.products = data;
});;  
}

loadNextProduct()
{
  this.currentPosition+=this.pageSize;
  let url='http://localhost:8081/pagination-ajax/ProductControllerServlet2?cp='+this.currentPosition;
  this.ps.retrieveFromServerNext(url).subscribe(data => {
    this.products = data;
});;  
}

loadPrevProduct()
{
  this.currentPosition-=this.pageSize;
  let url='http://localhost:8081/pagination-ajax/ProductControllerServlet2?cp='+this.currentPosition;
  this.ps.retrieveFromServerPrev(url).subscribe(data => {
    this.products = data;
});;  
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