import { Component, OnInit } from '@angular/core';
import { NumbersService  } from "../numbers.service";

@Component({
  selector: 'my-phone-book',
  templateUrl: './my-phone-book.component.html',
  styleUrls: ['./my-phone-book.component.css']
})
export class MyPhoneBookComponent implements OnInit {

  constructor(private numbersService: NumbersService) { }
	submitted: boolean;
	formControls = this.numbersService.form.controls;
	showSuccessMessage: boolean;

	ngOnInit() {
  	}

	onSubmit(){
		this.submitted = true;
	    if(this.numbersService.form.valid){
           	if(this.numbersService.form.get("$key").value == null ){ 
           		this.numbersService.insertNumbers(this.numbersService.form.value);
		       	this.showSuccessMessage =true;
		       	setTimeout(()=> this.showSuccessMessage=false,3000);
		       	this.submitted = false;
		       	this.numbersService.form.reset();
		    } else {
	    	   	this.numbersService.updateNumbers(this.numbersService.form.value);
	    	   	this.showSuccessMessage =true;
		       	setTimeout(()=> this.showSuccessMessage=false,3000); 
		       	this.submitted = false;
		       	this.numbersService.form.reset();
		       }
	 	}
	}

}
