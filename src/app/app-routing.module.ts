import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

// Pages Components
import {HomeComponent} from './components/pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', loadChildren: () => import('./components/pages/posts/posts.module').then(m => m.PostsModule)},
  {path: 'posts/:id', loadChildren: () => import('./components/pages/post/post.module').then(m => m.PostModule)},
  // {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
