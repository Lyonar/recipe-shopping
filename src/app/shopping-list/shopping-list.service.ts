import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    //emitter ensures an updated copy gets sent to list component
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        //this would emit many events, but works
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        
        //... is the spread operator (ES6) lets push each item in array
        this.ingredients.push(...ingredients);
        //now only emiting the entire array once
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}