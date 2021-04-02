import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            [
                new Ingredient('Meat', 4),
                new Ingredient('French Fries', 2)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is another test', 
            'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80',
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

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}