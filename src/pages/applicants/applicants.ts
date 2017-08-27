import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-applicants',
  templateUrl: 'applicants.html',
})
export class Applicants {

  acceptedapplicants:any=[];
  refusedapplicants:any=[];
 sim_name;
 sim_id;
 list;
 applied;
 accepted;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
   this.list="applied";
  }

 

  accept(){


    
  }
  ngOnInit() {

this.sim_name=this.navParams.get("name");
this.sim_id=this.navParams.get("id")

this.http.get("https://ffserver.eu-gb.mybluemix.net/get-applicants?simulation_date_id="+this.sim_id).subscribe(data => {
  var res = JSON.parse(data['_body']);
  this.applied=res.applied;
 this.accepted=res.accepted;
 console.log("applied",this.applied);
 console.log("accepted",this.accepted);
 
 
});
  }

  switch(){
    
    
    if(this.list=="applied"){
    
    this.list="accepted";
    
    
    }
    else{
      this.list="applied";
    }
    
    }

}
