import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RestaurantRegistrComponent } from './restaurant-registr/restaurant-registr.component';
import { RestaurantUpdateComponent } from './restaurant-update/restaurant-update.component';
import { RestaurantReviewsComponent } from './restaurant-reviews/restaurant-reviews.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantRegistrComponent,
    RestaurantUpdateComponent,
    RestaurantReviewsComponent,
    WriteReviewComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
