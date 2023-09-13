import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'zone.js'; // manderebbe in errore =>

// Best Practice: Dividere Import (Miei, Angular, Librerie Esterne...)
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule],
  providers: [PostService], //diverso da nostro approccio, noi usiamo provideIn: 'root'
  bootstrap: [AppComponent],
})
export class AppModule {}
