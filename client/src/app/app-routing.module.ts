import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRegistrComponent } from './restaurant-registr/restaurant-registr.component';
import { RestaurantReviewsComponent } from './restaurant-reviews/restaurant-reviews.component';
import { RestaurantUpdateComponent } from './restaurant-update/restaurant-update.component';
import { WriteReviewComponent } from './write-review/write-review.component';

const routes: Routes = [
  { path: '',component: RestaurantListComponent },
  { path: 'new',component: RestaurantRegistrComponent },
  { path: 'edit/:id',component: RestaurantUpdateComponent },
  { path: 'reviews/:id',component: RestaurantReviewsComponent },
  { path: 'write/:id',component: WriteReviewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/'},
  //{path: '**', component: RestaurantListComponent }
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
