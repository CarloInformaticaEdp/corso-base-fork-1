import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'zone.js'; // manderebbe in errore se lo togliessimo

// Best Practice: Dividere Import (Miei, Angular, Librerie Esterne...)
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PostRowComponent } from './post-row/post-row.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostRowComponent,
    PostEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [PostService], //diverso da nostro approccio, noi usiamo provideIn: 'root'
  bootstrap: [AppComponent],
})
export class AppModule {}
