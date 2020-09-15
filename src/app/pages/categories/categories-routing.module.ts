import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: ':new', component: CategorieFormComponent },
  { path: ':id/edit', component: CategorieFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
