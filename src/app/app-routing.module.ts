import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages Components
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
