import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/components/home/home.component';
import { TecnicoCreateComponent } from './view/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoComponent } from './view/components/tecnico/tecnico.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'tecnicos',
    component: TecnicoComponent
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
