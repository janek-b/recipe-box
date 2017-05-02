import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'recipe-detail',
  template: `
  <div *ngIf="currentRecipe" class="card blue-grey darken-1">
    <div class="card-image">
      <img [src]="currentRecipe.image">
      <span class="card-title">{{currentRecipe.title}}</span>
    </div>
    <div class="card-content white-text">
      <ul class="collection black-text">
        <li class="collection-item" *ngFor="let ingredient of currentRecipe.ingredients">{{ingredient}}</li>
      </ul>
      <p>{{currentRecipe.directions}}</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Edit Recipe<i class="material-icons right">close</i></span>
      <recipe-edit [recipeToEdit]="currentRecipe" (editRecipeSender)="updateRecipe($event)"></recipe-edit>
    </div>
    <div class="card-action">
      <a (click)="recipeHide()" class="waves-effect waves-light btn left-align">Hide</a>
      <a class="waves-effect waves-light btn right activator">Edit</a>
    </div>
  </div>
  `
})

export class RecipeDetailComponent {
  @Input() currentRecipe: Recipe;
  @Output() recipeHideSender = new EventEmitter();
  @Output() editRecipeSender = new EventEmitter();

  showEditForm = false;

  updateRecipe(recipeToUpdate: Recipe) {
    this.editFormToggle();
    this.editRecipeSender.emit(recipeToUpdate);
  }

  editFormToggle() {
    this.showEditForm = !(this.showEditForm)
  }

  recipeHide() {
    this.recipeHideSender.emit();
  }

}
