import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-restaurant-registr',
	templateUrl: './restaurant-registr.component.html',
	styleUrls: ['./restaurant-registr.component.css']
})
export class RestaurantRegistrComponent implements OnInit {
	errors: any;
	newRestaurant = {
		"rest_name": "",
		"cuisine": "",
  	}
	constructor(private _httpService: HttpService,
		private router: Router ){ 
	}

  	ngOnInit() {
  	}
  createRestaurant() {			
    let obs = this._httpService.createRestaurant(this.newRestaurant);
    obs.subscribe(data => {
      	if (data['message'] == "Success") {
        	this.newRestaurant = {
				"rest_name": "",
				"cuisine": "",
       		}
        	this.router.navigate(['/']);
      	} else if (data['err']) {
        	this.errors = data['err']
      }
    });
  }

}
