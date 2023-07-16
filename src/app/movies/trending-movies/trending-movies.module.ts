import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingMoviesRoutingModule } from './trending-movies-routing.module';
import { TrendingMoviesComponent } from './trending-movies.component';


@NgModule({
  declarations: [
    TrendingMoviesComponent
  ],
  imports: [
    CommonModule,
    TrendingMoviesRoutingModule
  ]
})
export class TrendingMoviesModule { }
