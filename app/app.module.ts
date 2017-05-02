import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit.component';
import { FormsModule } from '@angular/forms';

import { MdSelectModule } from '@angular/material';

@NgModule({
  imports: [ BrowserModule, FormsModule, NoopAnimationsModule, MdSelectModule ],
  declarations: [ AppComponent, RecipeListComponent, RecipeDetailComponent, RecipeEditComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
