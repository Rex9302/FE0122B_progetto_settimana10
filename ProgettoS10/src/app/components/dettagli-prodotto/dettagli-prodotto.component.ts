import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CarrelloService } from 'src/app/service/carrello.service';
import { ProductsService } from 'src/app/service/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dettagli-prodotto',
  templateUrl: './dettagli-prodotto.component.html',
  styleUrls: ['./dettagli-prodotto.component.scss']
})
export class DettagliProdottoComponent implements OnInit {

  dettagliProdotto!:Product;
  display = false
  constructor(private prodSrv:ProductsService, private carrelloSrv:CarrelloService ,private router: ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.prodSrv.getProdotto(id).subscribe((prodotto)=>{
        this.dettagliProdotto = prodotto
      })
    })
  }
  aggiungi(prodotto:Product){
    this.carrelloSrv.addToCart(prodotto)
    this.carrelloSrv.conta()
    this.display = true
    setTimeout(()=>{
      this.display = false
    },1000)
  }
  back(): void {
    this.location.back()
  }
}
