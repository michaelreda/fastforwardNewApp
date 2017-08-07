import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { SocialSharing } from '@ionic-native/social-sharing';
import {DataService} from '../../providers/data-service';
import{ ItemDetailPage} from'../item-detail/item-detail';
/**
 * Generated class for the Vedios page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-vedios',
	templateUrl: 'vedios.html',
})
export class Vedios {
vedios1:any=[];
check=false;
dump:any;
	constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService,private sharefb:SocialSharing) {
	/*this.vedios=[
			{title:"first vedio",link:"https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4",brief:"brief description of the vedio",company_name:"IBM",vedioid:1,companyid:1,liked:false,followed:false,pp:""},
			{title:"second vedio",link:"https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4",brief:"brief description of the vedio",company_name:"IBM",vedioid:2,companyid:2,liked:false,followed:true,pp:""},
			{title:"third vedio",link:"https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4",brief:"brief description of the vedio",company_name:"IBM",vedioid:3,companyid:3,liked:true,followed:false,pp:""},
			{title:"fourth vedio",link:"https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4",brief:"brief description of the vedio",company_name:"IBM",vedioid:4,companyid:4,liked:false,followed:false,pp:""},



	];*/
	}



	 ngOnInit() {

this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/allVideos?user_id=1");
this.DS.load().subscribe(
						data => this.setresponse(data)

				);

	}
			setresponse(value){
				this.vedios1=value;


}

like(x){
if(x.liked) {
	x.liked=false;
	//like link
	this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/dislike-video?user_id=1&video_id="+x.video_id);
this.DS.load().subscribe(
						data => this.dump

				);
}
else{
x.liked=true;
//unlike link

	this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/like-video?user_id=1&video_id="+x.video_id);
this.DS.load().subscribe(
						data => this.dump

);
}




}
follow(x){
	 console.log("ya mr7ba",x.company_id);
	if(x.followed) {
	x.followed=false;
	//like link
	this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/unfollow-company?user_id=1&company_id="+x.company_id);
this.DS.load().subscribe(
						data => this.dump

				);
					this.vedios1.forEach(element => {
						if(element.company_id==x.company_id)element.followed=false;
					});



}
else{


x.followed=true;
//unlike link

	this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/follow-company?user_id=1&company_id="+x.company_id);
this.DS.load().subscribe(
						data => this.dump

);
					this.vedios1.forEach(element => {
						if(element.company_id==x.company_id)element.followed=true;
					});

}
}

 share(){
		 this.sharefb.shareViaFacebook("Download the app",null,"https://www.youtube.com/embed/_Xcmh1LQB9I").then((response)=>{

			//alert('vedio is shared');
			alert(JSON.stringify(response.authResponse))
		},(error)=>{alert(error)})





	 }

}
