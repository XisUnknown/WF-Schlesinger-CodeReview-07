import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent} from './home/home.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { MyPhoneBookComponent } from './my-phone-book/my-phone-book.component';
import { FooterComponent } from './footer/footer.component';
import { NumbersService } from "./numbers.service" ;
import { NumbersListComponent } from './numbers-list/numbers-list.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { LocationComponent } from './location/location.component';
import { LocationListComponent } from './location-list/location-list.component';
import { AddlocationComponent } from './addlocation/addlocation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ImportantNumbersComponent,
    MyPhoneBookComponent,
    NumbersListComponent,
    FooterComponent,
    LocationComponent,
    LocationListComponent,
    AddlocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [NumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
