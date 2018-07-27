import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MomentModule } from 'angular2-moment';
import { ProductsComponent } from './products/products.component';
import {RouterModule} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LogoutComponent, 
  ],
  imports: [
    BrowserModule,
    NgIdleKeepaliveModule.forRoot(),NgbModule.forRoot(),
     HttpModule, MomentModule, FormsModule, RouterModule.forRoot([
      //{path:'', redirectTo:'products', pathMatch:'full'},
      {path:'products', component:ProductsComponent}, 
      {path:'logout', component:LogoutComponent}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
