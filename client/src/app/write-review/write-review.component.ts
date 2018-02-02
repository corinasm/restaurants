import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-write-review',
	templateUrl: './write-review.component.html',
	styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {
	id: number;
	errors: any;
	reviews: any;
	newReview={
		"user_name": "",
		"stars": null,
		"user_review": ""
	  }
	reviewedRestaurant = {
		"rest_name": "",
		"cuisine": "",
		"newReview": {
			"user_name": "",
			"stars": null,
			"user_review": ""
		  }
	}
  	constructor(
		private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router
		) {   }

  	ngOnInit() {
    	this.route.params.subscribe((params: Params) => {
			this.id=params['id'];
			console.log(params['id']);
			this.getOneRestaurant(params['id']);
      	})		
    }

	getOneRestaurant(id) {  
		console.log("-->getOneRestaurant()");
		let obs = this._httpService.getOneRestaurant(id);
		obs.subscribe(data => {
			this.reviewedRestaurant = data['data']; 
			this.id  = this.reviewedRestaurant['_id'];			
			console.log("In getOneRestaurant method: ", this.reviewedRestaurant);
			console.log("Printing this.id: ", this.id);
		})
	}
	writeReview() {
		console.log("-->writeReview()");
		console.log("new review",this.newReview);
		console.log("reviewedRest:",this.reviewedRestaurant);
		// this.id=this.reviewedRestaurant._id;
		// this.reviewedRestaurant = {
		// 	// "_id": this.id,
		// // "rest_name": "",
		// // "cuisine": "",
		// 	"newReview": {
		// 		"user_name": this.newReview.user_name,
		// 		"stars": this.newReview.stars,
		// 		"user_review": this.newReview.user_review
		// 	}
		// }
		this.reviewedRestaurant["reviews"].push(this.newReview);
		let obs = this._httpService.writeReview(this.reviewedRestaurant);
		
		console.log("Id", this.id);

		obs.subscribe(data => {
			if (data['message'] == "Success") {
				console.log("Got back Success message");
				this.newReview = {
					"user_name": "",
					"stars": null,
					"user_review": ""
				}
				console.log("Id:",this.id);
				this.router.navigate(['/reviews/'+this.id]);
			} else if (data['err']) {
				console.log("Got back Error message");
				this.errors = data['err']
			}
    	})
  	};
}
