import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banking-application',
  templateUrl: './banking-application.component.html',
  styleUrls: ['./banking-application.component.scss']
})
export class BankingApplicationComponent implements OnInit {

  private showBankApplicationForm:boolean=true;
  private showUserProfileForm:boolean=false;
  private showAddressDetailForm:boolean=false;
  private response:any;
  private selectedValue:String='';
  private firstName:String='';
  private lastName:String='';
  private fulName:String='';
 

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get('http://localhost:8300/getAccountType')
    .subscribe((response)=>{
      this.response=response;
      console.log(response);
    });
  }
  getData(response){
    this.response=response
  }
  hideAndShowForm(formName){
    if(formName=="bankApp"){
      this.showBankApplicationForm=false;
      this.showUserProfileForm=true;
      this.showAddressDetailForm=false;
    }
    if(formName=="userProf"){
      this.showBankApplicationForm=false;
      this.showUserProfileForm=false;
      this.showAddressDetailForm=true;
      this.fulName=this.firstName+" "+this.lastName;
    }
    if(formName=="addressDetailBack"){
      this.showBankApplicationForm=false;
      this.showUserProfileForm=true;
      this.showAddressDetailForm=false;
    }
    if(formName=="userProfBack"){
      this.showBankApplicationForm=true;
      this.showUserProfileForm=false;
      this.showAddressDetailForm=false;
    }
  }
  getSelectedOptionText(event:Event){
    let selectedOptions=event.target['options'];
    let selectedIndex=selectedOptions.selectedIndex;
    let selectedElementText=selectedOptions[selectedIndex].text;
    this.selectedValue=selectedElementText;

  }

}
