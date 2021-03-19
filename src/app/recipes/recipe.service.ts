import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fmini-salami-pizza-on-a-dark-wooden-background-top-view-picture-id639963606%3Fk%3D6%26m%3D639963606%26s%3D612x612%26w%3D0%26h%3DNliKTAtYAszsCgGrB3-Lm1cZc9PlXh_paQGMgltAdzA%3D&sp=1616178631T3bb0ad6899c37d70eadd96460258554dacc31f63714c42924dce755503167217',
            [
                new Ingredient('Meat', 4),
                new Ingredient('French Fries', 2)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is another test', 
            'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fmini-salami-pizza-on-a-dark-wooden-background-top-view-picture-id639963606%3Fk%3D6%26m%3D639963606%26s%3D612x612%26w%3D0%26h%3DNliKTAtYAszsCgGrB3-Lm1cZc9PlXh_paQGMgltAdzA%3D&sp=1616178631T3bb0ad6899c37d70eadd96460258554dacc31f63714c42924dce755503167217',
            [
                new Ingredient('Pepperoni', 1),
                new Ingredient('Olives', 2)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        //this method returns a COPY of recipes
        return this.recipes.slice();
    }  

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}