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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemoirsComponent,
    PhotosComponent,
    PoemsComponent,
    FooterComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
