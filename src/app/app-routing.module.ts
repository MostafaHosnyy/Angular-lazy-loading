import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full'}, 
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) }, 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'home-page', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'trending-Movies', loadChildren: () => import('./movies/trending-movies/trending-movies.module').then(m => m.TrendingMoviesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
