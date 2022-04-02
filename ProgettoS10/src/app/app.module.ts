import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { RouterModule } from '@angular/router';
import { DettagliProdottoComponent } from './components/dettagli-prodotto/dettagli-prodotto.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {path:'', component:HomeComponent},
  {path:'carrello', component:CarrelloComponent},
  { path: 'products/:id', component: DettagliProdottoComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CarrelloComponent,
    DettagliProdottoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
