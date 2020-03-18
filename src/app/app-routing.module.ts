import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BaseResolver} from './shared/resolvers/BaseResolver';
import {AppInfoComponent} from './app-info/app-info.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {PageNotFoundComponent} from './invalid/page-not-found/page-not-found.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageAddComponent} from './message-add/message-add.component';


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
    path: 'messages',
    component: MessagesComponent,
    resolve: {
      data: BaseResolver
    }
  },
  {
    path: 'createMessage',
    component: MessageAddComponent,
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
