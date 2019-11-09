import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { MyPhoneBookComponent } from './my-phone-book/my-phone-book.component';
import { LocationComponent } from './location/location.component';
import { LocationListComponent } from './location-list/location-list.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent
}, {
  path: "app-location-list",
  component: LocationListComponent
}, {
  path: "app-addlocation",
  component: AddlocationComponent
}, {
  path: "app-blog",
  component: BlogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

