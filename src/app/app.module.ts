import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PagenotFoundComponent } from './shared/components/pagenot-found/pagenot-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './shared/components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotFoundComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
