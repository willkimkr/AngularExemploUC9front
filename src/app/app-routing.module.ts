import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './views/card/card.component';
import { ContatoComponent } from './views/contato/contato.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';



const routes: Routes = [
  {path:"card", component:CardComponent},
  {path:"",component:HomeComponent},
  {path:"contato", component:ContatoComponent},
  {path:"footer",component:FooterComponent},
  {path:"header",component: HeaderComponent},
  {path:"login",component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
