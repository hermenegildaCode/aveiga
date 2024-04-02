import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { MemoirsComponent } from './Memoirs/memoirs/memoirs.component';
import { PhotosComponent } from './Photos/photos/photos.component';
import { PoemsComponent } from './Poems/poems/poems.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './Footer/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './Photos/image-detail/image-detail.component';
import { ImageService } from './Photos/photos/images.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtajUYGjxKwB9E8L4h6zXIo2B1eVNuGXU",
  authDomain: "ave1ga.firebaseapp.com",
  projectId: "ave1ga",
  storageBucket: "ave1ga.appspot.com",
  messagingSenderId: "100800842961",
  appId: "1:100800842961:web:79df623c9d792e00b749f0"
};
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemoirsComponent,
    PhotosComponent,
    PoemsComponent,
    FooterComponent,
    ImageDetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
