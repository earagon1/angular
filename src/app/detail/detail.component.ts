import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product:any=[]
  constructor(private productServ:ProductService) {
    this.productServ.getProductos()
    .subscribe(data=>{
     console.log(data);
     this.product=data;
    }) 
   }

  ngOnInit(): void {
  }

}
