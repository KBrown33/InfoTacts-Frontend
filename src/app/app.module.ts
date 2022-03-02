import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  DirectoryComponent } from './directory/directory.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfotactComponent } from './infotact/infotact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DirectoryComponent,
    InfotactComponent,
    AddContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
