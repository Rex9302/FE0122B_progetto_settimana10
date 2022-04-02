import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarrelloService } from 'src/app/service/carrello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  constructor(private carrelloSrv:CarrelloService, private router: Router ) { }

  display = false;
  displayRemove = false;

  checkout = new FormGroup({
  nome : new FormControl(''),
  indirizzo : new FormControl('')
  });

  prodotti = this.carrelloSrv.getItems()

  ngOnInit(): void {
  }

  svuotaCart(){
    this.carrelloSrv.clearCart()
  }

  removeItem(id:number){
    this.carrelloSrv.remove(id)
    this.displayRemove = true;
    setTimeout(()=>{
    this.displayRemove = false;
  },1000)
  }
  onSubmit(){
    if(this.checkout.value.nome == 0 || this.checkout.value.indirizzo == 0){
      alert('Copila tutti i campi!')
    }else{
    console.log(this.checkout.value)
    this.display = true
    setTimeout(()=>{
    this.carrelloSrv.clearCart()
    this.router.navigate([''])
    },3000)
    }
  }
}
