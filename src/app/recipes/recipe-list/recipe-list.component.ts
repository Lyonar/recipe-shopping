import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimages.penguinrandomhouse.com%2Fcover%2F9781984857347&sp=1615486706Tdcf680bcec97270f3812a67887c45a37b29ec2cc5d5ae21de925c4d8a1247157')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
