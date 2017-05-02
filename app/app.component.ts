import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <div class="nav-wrapper deep-orange darken-1">
        <a class="brand-logo center">Hot Sauce</a>
      </div>
    </nav>
    <div class="row">
      <div class="col s4 offset-s1">
        <recipe-list [recipeList]="recipes" (clickSender)="showDetails($event)"></recipe-list>
        <recipe-new (newRecipeSender)="addRecipe($event)"></recipe-new>
      </div>
      <div class="col s6">
        <recipe-detail [currentRecipe]="selectedRecipe" (recipeHideSender)="recipeHide()" (editRecipeSender)="updateRecipe($event)"></recipe-detail>
      </div>
    </div>

  `
})

export class AppComponent {
  recipes: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.recipes = af.database.list('/recipes');
  }
  selectedRecipe = null;


  showDetails(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }

  recipeHide() {
    this.selectedRecipe = null;
  }

  updateRecipe(recipeToUpdate: any) {
    this.recipes.update(recipeToUpdate.key, recipeToUpdate.recipe);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }

}
