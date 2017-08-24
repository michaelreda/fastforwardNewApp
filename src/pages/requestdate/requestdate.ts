import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {Http} from '@angular/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Requestdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-requestdate',
  templateUrl: 'requestdate.html',
})
export class Requestdate {
  date:any=[];
  simulation_id ; 
  localDate=new Date();
   nowDate=new Date();
   color="color:#32db64";
   dump:any;
    dump1:any;
    formGroup;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams,private DS:DataService,private store:Storage) {
    this.simulation_id = navParams.get("SimID"); 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Requestdate');
  }
setDate(event){
this.nowDate=event;
this.nowDate.setHours(this.nowDate.getHours()+2);
var theDate = this.nowDate.toISOString() ; 

 this.store.get('user_id').then((val) => {
    var sendObj = {
  date: theDate ,
  simulation_id: this.simulation_id , 
  user_id :val 
    }   ; 
    console.log("still out ya naaas " , sendObj); 
// this.http.post("https://ffserver.eu-gb.mybluemix.net/request-new-time",sendObj).subscribe(data => {
// 						var res = JSON.parse(data['_body']);
// 						// this.user_simulations=res;
//             console.log("im IN ya naaaaas"); 
// 						  console.log(res);
//               theDate = this.TransfromDate(theDate) 
//               var dateObj = {
//               date : theDate  , 
//               votes :"1" 
//               }
//             this.date.push(dateObj) ;  
// 						// this.loading=false;
// 					});
  //  console.log("https://ffserver.eu-gb.mybluemix.net/request-new-time?simulation_id="+this.simulation_id+"&date="+theDate+"&user_id="+val); 
    this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/request-new-time?simulation_id="+this.simulation_id+"&date="+theDate+"&user_id="+val);
    this.DS.load().subscribe(
            data => { //this.date= data ;
                        var theDate2 = new Date(theDate);  
                        theDate =  this.TransfromDate(theDate2); 
                        console.log(theDate2) ; 
                        var dateObj = {
                        date : theDate , 
                        votes :"1" 
                        }
                      this.date.push(dateObj) ;   
                      console.log("done"); 
                      console.log (data); 
                  }
            
        );
 });
 

  
}

TransfromDate (date)
{
    var datos = date.toDateString() ;
    var time = date.getHours() ; 
    var Label = " AM"; 
    if (time > 12 ){
      time = time - 12 ; 
      Label =" PM"; 
    }
    //console.log(time); 
    var send = datos +" at " + time +""+Label ; 
    return send ; 
   // console.log(send); 
}
 ngOnInit(){
// this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/dateso");
// this.DS.load().subscribe(
//             data => (this.dump1=data)
            
//         );
    console.log("hello"); 
    this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/get-date-votes?simulation_id="+this.simulation_id);
    this.DS.load().subscribe(
            data => {this.date= data ;  
                      console.log("hi"); 
                      console.log (data); 
                  }
            
        );


}
}
