import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit.component';
import { RecipeNewComponent } from './recipe-new.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { masterFirebaseConfig } from './api-keys';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

import { MdSelectModule } from '@angular/material';

@NgModule({
  imports: [ BrowserModule, FormsModule, NoopAnimationsModule, MdSelectModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent, RecipeListComponent, RecipeDetailComponent, RecipeEditComponent, RecipeNewComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
