import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'zone.js'; // manderebbe in errore =>

// Best Practice: Dividere Import (Miei, Angular, Librerie Esterne...)
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
