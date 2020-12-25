import { Component, OnInit } from '@angular/core';
import { JurnalService } from './services/jurnal.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jurnal-ringkas';
  dataList
  loading = true;

  constructor(private jurnalServ:JurnalService){}
 
  
  url = "https://online-journals.org/index.php/i-jet/article/download/9289/5456"
  
  showResume(form:NgForm){
    this.loading
    console.log(form.value)
    let url = form.controls['url'].value
    this.jurnalServ.getResume(url).subscribe((res)=>{
      
      console.log(res)
      this.dataList = res
      this.loading = false;
    },(err)=>console.log(err))
  }
}
