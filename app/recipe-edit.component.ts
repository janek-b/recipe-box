import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Recipe } from './recipe.model';

declare var jQuery: any;

@Component({
  selector: 'recipe-edit',
  template: `
    <div class="input-field">
      <input [(ngModel)]="recipeToEdit.title" id="title" type="text">
      <label for="title" class="active">Title</label>
    </div>
    <div class="input-field">
      <md-select [(ngModel)]="currentIngredient" style="width: 100%;">
        <md-option>Select an ingredient to edit</md-option>
        <md-option *ngFor="let ingredient of recipeToEdit.ingredients; let i = index;" [value]="i">{{ingredient}}</md-option>
      </md-select>
    </div>
    <div class="input-field">
        <input [(ngModel)]="recipeToEdit.ingredients[currentIngredient]" type="text">
    </div>
    <div class="input-field">
      <textarea [(ngModel)]="recipeToEdit.directions" id="directions" class="materialize-textarea"></textarea>
      <label for="directions" class="active">Directions</label>
    </div>
    <a (click)="updateRecipe(recipeToEdit.$key, recipeToEdit)" class="waves-effect waves-light btn">Submit</a>
  `
})

export class RecipeEditComponent {
  @Input() recipeToEdit: Recipe;
  @Output() editRecipeSender = new EventEmitter();

  updateRecipe(key: string, recipe: Recipe) {
    this.editRecipeSender.emit({key: key, recipe: recipe});
  }

  currentIngredient;

  // ngAfterViewInit() {
  //   jQuery('select').material_select();
  //   Materialize.updateTextFields();
  // }
}
