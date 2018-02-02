import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.css']
})



export class RestaurantReviewsComponent implements OnInit {
  	errors: any;
	id: any;	
	reviews: any;
	reviewedRestaurant = {
		"rest_name": "",
		"cuisine": "",
		"reviews": [],
	}
	
	constructor(
		private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router
		) {   }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
		console.log(params['id']);
		this.getOneRestaurant(params['id']);
		})		
	}

	getOneRestaurant(id) {  
		let obs = this._httpService.getOneRestaurant(id);
		console.log(id);
		obs.subscribe(data => {
			this.reviewedRestaurant = data['data']; 
			console.log(this.reviewedRestaurant);
			this.reviews = data['data']['reviews']; 
			console.log("This.reviews:",this.reviews );
			// this.reviews.sort(this.sortFunction);
			this.sortByKey(this.reviews, "stars");
			console.log("Should be sorted by stars: ", this.reviews);
		});
	} 
	

	sortByKey(arr, key) {
		console.log("key:", key);
		return arr.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		});
	}	
}




	  