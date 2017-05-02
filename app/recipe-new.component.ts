import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-new',
  template: `
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Add a new Recipe</span>
      <div class="row">
        <form (ngSubmit)="onSubmit($event, newHotSauce);" #newHotSauce="ngForm">
          <div class="input-field col s12">
            <input #newTitle id="title" type="text">
            <label for="title">Title</label>
          </div>
          <div *ngIf="newIngredients.length > 0" class="col s12">
            <ul class="collection black-text">
              <li class="collection-item" *ngFor="let ingredient of newIngredients">{{ingredient}}</li>
            </ul>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input #newIngredient id="ingredient" type="text">
              <label for="ingredient">Ingredient</label>
            </div>
            <div class="col s12">
              <a (click)="addIngredient(newIngredient.value); newIngredient.value='';" class="waves-effect waves-light btn">Add</a>
            </div>
          </div>
          <div class="input-field col s12">
            <input #newImage id="image" type="text">
            <label for="image">Image url</label>
          </div>
          <div class="input-field col s12">
            <textarea #newDirections id="directions" class="materialize-textarea"></textarea>
            <label for="directions" class="active">Directions</label>
          </div>
          <button type="submit" (click)="addRecipe(newTitle.value, newDirections.value, newImage.value); newTitle.value=''; newDirections.value=''; newImage.value='';" class="waves-effect waves-light btn">Add Recipe</button>
        </form>
      </div>
    </div>
  </div>
  `
})

export class RecipeNewComponent {
  @Output() newRecipeSender = new EventEmitter();
  newIngredients: string[] = [];

  onSubmit(event, form){
    event.preventDefault();
    form.reset();
    return false;
  }
  addIngredient(newIngredient: string) {
    this.newIngredients.push(newIngredient);
    this.newIngredient = null;
  }

  addRecipe(newTitle: string, newDirections: string, newImage: string) {
    var newRecipe: Recipe = new Recipe(newTitle, this.newIngredients, newDirections, newImage);
    this.newRecipeSender.emit(newRecipe);
    this.newIngredients = [];
  }
}
