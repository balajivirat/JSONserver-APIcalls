import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-emp-covid-result',
  templateUrl: './emp-covid-result.component.html',
  styleUrls: ['./emp-covid-result.component.css']
})
export class EmpCovidResultComponent implements OnInit {
  data: any;
  editname: any;
  editage: any;
  editresult: any;
  editid: any;
  edits: any = {};
  edited: any;
  constructor(public covidservice: CovidService) { }

  ngOnInit(): void {
    this.covidservice.getData().subscribe(res =>{
      this.data = res;
      console.log(this.edits);
      
    })
  }
  submitForm(value: any){
    if (this.edits.id) {
      this.covidservice.update(this.edits.id, {name: this.editname, age: this.editage, result: this.editresult}).subscribe(()=>{
        this.edits = {};
        this.ngOnInit();
      })
    }else{
    this.covidservice.create(value).subscribe((data)=>{
      this.edited = data;
      this.ngOnInit();
    })
    
    }
  }
  delete(id:any){
    this.covidservice.delete(id).subscribe(()=>{
      this.ngOnInit();
    })
    
  }
  edit(value: any){

    this.editname = value.name;
    this.editage = value.age;
    this.editresult = value.result;
    this.edits = value; 
    
    
  }

}
