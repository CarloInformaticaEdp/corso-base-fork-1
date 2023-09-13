import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // importiamo il tipo Routes (nativo angular) per soddisfare le proprietà richieste dal router
import { PostComponent } from './post/post.component';

const ROUTES: Routes = [
  {
    path: 'post-list',
    component: PostComponent,
    data: { showHeader: false, onlyMyPost: false }, // se volessimo passare dei dati al passaggio di route, potremmo inserirli qui [showHeader esempio nostro, non angular-based] per passarli al componente
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)], // importa il router model con le nostre rotte [se, caso atipico, non dovessivo avere rotte nostre la voce imports è implicita della exports]
  exports: [RouterModule],
})
export class AppRoutingModule {}
