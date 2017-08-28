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
 applied:any=[];
 accepted:any=[];
 degree:any[];
 setdage:any={lower:-1,upper:5};
 refrence;
 original;
 pretab;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
   this.list="applied";
  this. pretab=false;
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
 this.original=this.refrence=this.applied;
 
});
  }

  switchapplied(){
    
   this.list="applied";
   
   if(this.pretab==true){

this.filter();

   }
   this.pretab=false;
    }
    switchaccepted(){
      
     this.list="accepted";
     if(this.pretab==true){
      
      this.filter();
      
         }
         this.pretab=false;
      }



    filterswitch(){
    
      if (this.list!="filter"){
this.list="filter";
this.pretab=true;

      }
      else{
this.list="applied";
this.pretab=false;
this.filter();
      }
    }


filter(){
  console.log("REF",this.refrence);
  
  this.applied=[];
  this.original=this.refrence;
  
  
  //degree
if(this.degree!=null && this.degree.length>0){
  
  for (var _i = 0; _i < this.degree.length; _i++) {
    this.original=this.refrence;
   this.original = this.original.filter(
     (item) => {

       
        return (item.degree===this.degree[_i]);
      });
        this.original.forEach(element => {
         this.applied.push(element);
       });

}
this.original=this.applied;
}

//rating
this.applied = this.original.filter(
  (item) => {

    
     return (item.rating>=this.setdage.lower && item.rating<=this.setdage.upper);
   });


}

}
