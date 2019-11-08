import { Component, OnInit } from '@angular/core';
import  { NumbersService } from "../numbers.service";

@Component({
  selector: 'numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.css']
})
export class NumbersListComponent implements OnInit {

  	numbersArray =[];
 	showDeletedMessage : boolean;
	searchText:string = "";
	constructor (private numbersService: NumbersService) { }

	ngOnInit() {
         this.numbersService.getNumbers().subscribe(
                 (list) => {
                          this.numbersArray = list.map( (item) => {
                                 return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
 	}

 onDelete($key){
      if(confirm("Are you sure you want to delete this record?")){
       this.numbersService.deleteNumbers($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }


 filterCondition(number){
    return number.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1  ;
 }
}