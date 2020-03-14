
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './shared/material/material.module';
import { HeaderComponent } from './header/header.component';
import {BaseResolver} from './shared/resolvers/BaseResolver';
import {AppService} from './shared/services/app.service';
import { FooterComponent } from './footer/footer.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {InvalidModule} from './invalid/invalid.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';
import { CustomTableComponent } from './shared/components/custom-table/custom-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AppInfoComponent,
    UserInfoComponent,
    MessagesComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    InvalidModule,
  ],
  providers: [
    AppService,
    BaseResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
