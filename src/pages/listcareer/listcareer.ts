import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';

import {DataService} from '../../providers/data-service';
/**
 * Generated class for the Listcareer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listcareer',
  templateUrl: 'listcareer.html',
})
export class Listcareer {
public items :any[];
private img;
private id;
private original:any[];
private refrence:any[];
public colleage;

class:any=[];
date:any=[];
size:any[];
setdage:any={lower:0,upper:1000};

  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService) {
this.img=navParams.get("img");
this.id=navParams.get("id");
 this.colleage="menu";
  
    
  }
 
resetarray(){
  this.original=this.refrence;
       


}



 ngOnInit(){
this.DS.seturl("https://walidpc.eu-gb.mybluemix.net/get-field-simulation?field_id="+this.id);
this.DS.load().subscribe(
            data => this.setvalue(data)
            
        );
          
          
 }
      setvalue(value){
this.refrence=value;
this.resetarray();
 this.items=this.original;
 
      }
  
change(){
 this. resetarray();
this.items=this.original;
if(this.size!=null && this.size.length>0){
  //type
  this .items=[ {name:"Web Development co.",city:"1 January 2018",price:55000,date:"JANUARY",class:"cloud",size:"small"}];
  this.items.pop();
  for (var _i = 0; _i < this.size.length; _i++) {
    this.original=this.refrence;
   this.original = this.original.filter(
     (item) => {

       
        return (item.size===this.size[_i]);
      });
        this.original.forEach(element => {
         this.items.push(element);
       });

}
this.refrence=this.original=this.items;
}





//class
if(this.class!=null && this.class.length>0){
  this .items=[ {name:"Web Development co.",city:"1 January 2018",price:55000,date:"JANUARY",class:"cloud",size:"small"}];
  this.items.pop();
  for (var _i = 0; _i < this.class.length; _i++) {
   this.original = this.original.filter(
     (item) => {

       
        return (item.class===this.class[_i]);
      });

        this.original.forEach(element => {
         this.items.push(element);
       });
}
this.refrence=this.original=this.items;
}






//date
if(this.date!=null && this.date.length>0){
 
  this .items=[ {name:"Web Development co.",city:"1 January 2018",price:55000,date:"JANUARY",class:"cloud",size:"small"}];
  this.items.pop();
  for (var _i = 0; _i < this.date.length; _i++) {
    this.original=this.refrence;
   this.original = this.original.filter(
     (item) => {

       
        return (item.date===this.date[_i]);
      });
        this.original.forEach(element => {
         this.items.push(element);
       });

}
this.refrence=this.original=this.items;
}





//pricing
this.items = this.original.filter(
     (item) => {

       
        return (item.price>=this.setdage.lower && item.price<=this.setdage.upper);
      });



}



switch(){


if(this.colleage=="menu"){

this.colleage="filter";


}
else{
  this.colleage="menu";
  this.change();
}

}



sim_details(x){
this .navCtrl.push(ItemDetailPage,{co_id:x.company_id});

  
}

}
