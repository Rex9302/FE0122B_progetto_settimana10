import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';
import { Subscription } from 'rxjs';
import { CarrelloService } from 'src/app/service/carrello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaProdotti:Product[] | undefined;
  sub!:Subscription ;
  display = false

  constructor(private prodSrv:ProductsService, private carrelloSrv:CarrelloService) { }

  ngOnInit(): void {
    this.sub = this.prodSrv.getProdotti().subscribe((lista)=>{
      this.listaProdotti = lista
    })
  }

  aggiungi(prodotto:Product){
    this.carrelloSrv.addToCart(prodotto)
    this.carrelloSrv.conta()
    this.display = true
    //alert('Hai aggiunto ' + prodotto.name + ' al carrello!')
    setTimeout(()=>{
      this.display = false
      },800)
  }

}
