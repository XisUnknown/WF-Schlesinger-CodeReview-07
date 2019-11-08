import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

 constructor(private firebase: AngularFireDatabase) { }
	numberList: AngularFireList<any>;

	form = new FormGroup({
        $key: new FormControl(null),
        name: new FormControl('', Validators.required),
        number: new FormControl('', Validators.required)
    });
    getNumbers(){
        this.numberList = this.firebase.list('numbers');
        return this.numberList.snapshotChanges();
    }
    insertNumbers(number){
        this.numberList.push({
            name: number.name,
            number: number.number, 
        });
    }
    populateForm(number){
        this.form.setValue(number);
    }
    updateNumbers(number){
        this.numberList.update(number.$key,{
            name: number.name,
            number: number.number,
        });
    }
    deleteNumbers($key: string){
        this.numberList.remove($key);
    }
}
