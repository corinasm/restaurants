import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-update',
  templateUrl: './restaurant-update.component.html',
  styleUrls: ['./restaurant-update.component.css']
})
export class RestaurantUpdateComponent implements OnInit {
	errors: any;
	//id: any;
	selectedRestaurant = {
		"rest_name": "",
		"cuisine": "",
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
		obs.subscribe(data => {
			this.selectedRestaurant = data['data']; 
			console.log("we are in getOneRestaurant. Got data back!", data['data']);
			console.log(this.selectedRestaurant);
		})
	}
  	editRestaurant() {
		let obs = this._httpService.editRestaurant(this.selectedRestaurant);
		console.log("In editRestaurant, right after observable declaration ", this.selectedRestaurant);
        obs.subscribe(data => {
			console.log("We are in Editing, print data we got back", data['message']);
          	if (data['message'] == "Success") {
				console.log("Component update .ts file. Got to 'Success' Conditional.");
            	this.selectedRestaurant = {
            	  "rest_name": "",
				  "cuisine": "",
				}
				this.router.navigate(['/']);
          	} else if (data['err']) {
				console.log("Updating Errors:", data['err'] ) ; 
				this.errors = data['err']
          	}
        })
      }
}
