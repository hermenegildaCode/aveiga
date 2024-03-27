import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { MemoirsComponent } from './Memoirs/memoirs/memoirs.component';
import { PhotosComponent } from './Photos/photos/photos.component';
import { PoemsComponent } from './Poems/poems/poems.component';
import { ImageDetailComponent } from './Photos/image-detail/image-detail.component';
import { FooterComponent } from './Footer/footer/footer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'memoirs', component: MemoirsComponent },
  {path: 'photos', component: PhotosComponent },
  { path: "image/:id", component: ImageDetailComponent },
  {path: 'poems', component: PoemsComponent},
  {path: 'footer', component: FooterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
