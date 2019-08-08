import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BaseResolver} from './shared/resolvers/BaseResolver';
import {AppInfoComponent} from './app-info/app-info.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {PageNotFoundComponent} from './invalid/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      data: BaseResolver
    }
  },
  {
    path: 'appInfo',
    component: AppInfoComponent,
    resolve: {
      data: BaseResolver
    }
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
    resolve: {
      data: BaseResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    resolve: {
      data: BaseResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
