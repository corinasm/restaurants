import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-restaurant-list',
	templateUrl: './restaurant-list.component.html',
	styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent implements OnInit {
	restaurants: [any];
	errors: any;
	fetchError:string;
	id: any;
	restaurant = {
		"rest_name": "",
		"cuisine": "",
	}
  	constructor(
		private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router
		) { }

  	ngOnInit() {
		this.listRestaurants();
	}
	  
  	listRestaurants() {
		let obs = this._httpService.listRestaurants();
			obs.subscribe(data => {
				if(data['message'] == "Success") {
					this.restaurants = data['data']; 
				} else {
					this.fetchError =" Something went wrong; we could not get the resturants at this time."
				}	
		}); 
  	}     

	deleteRestaurant(id: number) {  
		console.log("ID TO DELETE:",id);
		let obs = this._httpService.deleteRestaurant(id);
		//console.log("hello1:", id);
		obs.subscribe(data => {
		//this.restaurant = data['data']; 
		console.log(data['data']);
		if (data['message'] == "Delete success") {
			this.listRestaurants();
		} else if (data['err']) {
			this.errors = data['err']
		}
	})	
	}
}
