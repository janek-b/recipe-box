import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

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
      </div>
      <div class="col s6">
        <recipe-detail [currentRecipe]="selectedRecipe" (recipeHideSender)="recipeHide()"></recipe-detail>
      </div>
    </div>

  `
})

export class AppComponent {
  selectedRecipe = null;
  recipes: Recipe[] = [
    new Recipe('Sweet Ghost Pepper-Pineapple-Pear Hot Sauce', ['3 cups pear, chopped', '1 cup pineapple, chopped', '2 ghost peppers, chopped', '¼ cup apple cider vinegar', '1 teaspoon honey', '1 tablespoon dried basil', '1 teaspoon mustard powder'], 'Add everything to a large pot and bring the liquids to a quick boil. Turn down the heat and simmer for 20 minutes, until the entire mixture breaks down. Transfer to a food processor or blender and process until smooth. Pour into sterilized containers.'),
    new Recipe('Sambal Oelek', ['1 pound red chili peppers', '2 tablespoons rice vinegar', '1 tablespoon salt', '2 garlic cloves', '1 teaspoon lime juice'], 'Add all of the ingredients to a food processor or other grinder. A Molcajete is a great option here. Grind until a course paste forms. Add to a jar and cover. Refrigerate until ready to use.')
  ];

  showDetails(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }

  recipeHide() {
    this.selectedRecipe = null;
  }

}
