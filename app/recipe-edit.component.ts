import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-edit',
  template: `
  <div class="row">
    <div class="input-field col s12">
      <input [(ngModel)]="recipeToEdit.title" id="title" type="text">
      <label for="title" class="active">Title</label>
    </div>
    <div class="input-field col s8">
      <md-select [(ngModel)]="currentIngredient" style="width: 100%">
        <md-option>Add ingredient / Select an ingredient to edit</md-option>
        <md-option *ngFor="let ingredient of recipeToEdit.ingredients; let i = index;" [value]="i">{{ingredient}}</md-option>
      </md-select>
    </div>
    <div *ngIf="currentIngredient >= 0; else ingredientTemplate" class="input-field col s12">
      <input [(ngModel)]="recipeToEdit.ingredients[currentIngredient]" id="selectIngredient" type="text">
      <label for="selectIngredient" class="active">Edit Ingredient</label>
    </div>
    <ng-template #ingredientTemplate>
      <div class="row">
        <div class="input-field col s10">
          <input #newIngredient id="newIngredient" type="text">
          <label for="newIngredient">Add Ingredient</label>
        </div>
        <div class="col s2">
          <a (click)="addIngredient(newIngredient.value)" class="waves-effect waves-light btn">Add</a>
        </div>
      </div>
    </ng-template>
    <div class="input-field col s12">
      <input [(ngModel)]="recipeToEdit.image" id="image" type="text">
      <label for="image" class="active">Image url</label>
    </div>
    <div class="input-field col s12">
      <textarea [(ngModel)]="recipeToEdit.directions" id="directions" class="materialize-textarea"></textarea>
      <label for="directions" class="active">Directions</label>
    </div>
    <div class="input-field col s12">
      <a (click)="updateRecipe(recipeToEdit.$key, recipeToEdit)" class="waves-effect waves-light btn">Submit</a>
    </div>
  </div>
  `
})

export class RecipeEditComponent {
  @Input() recipeToEdit: Recipe;
  @Output() editRecipeSender = new EventEmitter();

  updateRecipe(key: string, recipe: Recipe) {
    this.editRecipeSender.emit({key: key, recipe: recipe});
  }

  addIngredient(newIngredient: string) {
    this.recipeToEdit.ingredients.push(newIngredient);
  }

  currentIngredient;

}
