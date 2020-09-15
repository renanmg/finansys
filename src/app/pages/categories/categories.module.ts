import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  declarations: [CategoriesListComponent, CategorieFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
