import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/components/home/home.component';
import { TecnicoComponent } from './view/components/tecnico/tecnico.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'tecnicos',
    component: TecnicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
