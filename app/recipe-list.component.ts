import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
  <ul class="collection">
    <a (click)="showDetails(recipe)" class="collection-item hoverable" *ngFor="let recipe of recipeList">{{recipe.title}}</a>
  </ul>
  `
})

export class RecipeListComponent {
  @Input() recipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  showDetails(recipeToShow: Recipe) {
    this.clickSender.emit(recipeToShow);
  }
}
