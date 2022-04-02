import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/service/carrello.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  totale:number = 0

  constructor(private cartSrv:CarrelloService) { }



  ngOnInit(): void {
    this.cartSrv.sub.subscribe((p) =>{
      this.totale = p
    })
  }

}
