import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  	constructor(private _http: HttpClient){
		// this.listRestaurants();
	}
    listRestaurants() {
		return this._http.get('/restaurants');
	}
	
	createRestaurant(newRestaurant){ 
		return this._http.post('/new-restaurant', newRestaurant);	
	} 
	getOneRestaurant(id) {  //When Update button is clicked
		console.log("I am in the service getOneRestaurant"); 
		return this._http.get('/restaurant/'+id);
	}
	editRestaurant(selectedRestaurant) {
		console.log("Service file. editRestaurant route.")
		console.log("Service file. SelectedRestaurant ID is: ", selectedRestaurant._id);
		console.log("Service file. SelectedRestaurant put data is: ", selectedRestaurant);
		return this._http.patch('/edit-restaurant/'+selectedRestaurant._id, selectedRestaurant);
	}
	deleteRestaurant(id) {
		return this._http.delete('/delete-restaurant/'+id);
	}
	writeReview(reviewedRestaurant){ 
		console.log("I am in the service newReview"); 
		return this._http.post('/write-review/'+reviewedRestaurant._id, reviewedRestaurant);	
	}
}
