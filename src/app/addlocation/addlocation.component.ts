import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {

  constructor(private locationService: LocationService) { }
  submitted: boolean;
  formControls = this.locationService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.locationService.form.valid) {
      if (this.locationService.form.get("$key").value == null) {
        this.locationService.insertData(this.locationService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.submitted = false;
        this.locationService.form.reset();
      } else {
        this.locationService.updateData(this.locationService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.submitted = false;
        this.locationService.form.reset();
      }
    }
  }


}
