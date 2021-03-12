import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimages.penguinrandomhouse.com%2Fcover%2F9781984857347&sp=1615486706Tdcf680bcec97270f3812a67887c45a37b29ec2cc5d5ae21de925c4d8a1247157'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fjoyfoodsunshine.com%2Fwp-content%2Fuploads%2F2017%2F04%2Feasy-guacamole-recipe-3.jpg&sp=1615508484T75ff0d264d8a763f61b48954511c78bb68577f1e753ab6210c25efb0645bb097')
  ];



  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
