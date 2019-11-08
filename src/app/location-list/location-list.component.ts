import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
 dataArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";
 constructor (private locationService: LocationService) { }

 ngOnInit() {
        this.locationService.getData().subscribe(
                (list) => {
                         this.dataArray = list.map( (item) => {
                                return {
                                       $key : item.key,
                                       ...item.payload.val()
                               }
                       })
                });
  }

onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
      this.locationService.deleteData($key);
      this.showDeletedMessage = true;
      setTimeout(()=> this.showDeletedMessage=false , 3000)
    }
  }


filterCondition(location){
   return location.place.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1  ;
}

}
