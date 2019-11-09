import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private firebase: AngularFireDatabase) { }
  locationList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    place: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required)
  });
  getData() {
    this.locationList = this.firebase.list('dataLocation');
    return this.locationList.snapshotChanges();
  }
  insertData(location) {
    this.locationList.push({
      place: location.place,
      price: location.price,
      date: location.date,
      url: location.url
    });
  }
  populateForm(location) {
    this.form.setValue(location);
  }
  updateData(location) {
    this.locationList.update(location.$key, {
      place: location.place,
      price: location.price,
      date: location.date,
      url: location.url
    });
  }
  deleteData($key: string) {
    this.locationList.remove($key);
  }
}
