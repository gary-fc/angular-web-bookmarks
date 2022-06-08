import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkComponent } from './ui/components/mark/mark.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { ClientLayoutComponent } from './ui/layouts/client-layout/client-layout.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { FooterComponent } from './ui/components/footer/footer.component';
import { CategoryComponent } from './ui/pages/category/category.component';
import { FormAddMarkComponent } from './ui/components/form-add-mark/form-add-mark.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkService } from './infraestructure/mark/mark.service';
import { MarkGateway } from './domain/models/gateway/MarkGateway';

let modules = [
  FormsModule,ReactiveFormsModule
]
@NgModule({
  declarations: [
    AppComponent,
    MarkComponent,
    HomeComponent,
    ClientLayoutComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    FormAddMarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    modules
  ],
  providers: [{provide: MarkGateway , useClass: MarkService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
