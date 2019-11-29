import { Http,Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth.service";
@Injectable()
export class DataStorageService
{
    
constructor(private http:Http,private recipeService:RecipeService,private authService:AuthService)
{
}
storeRecipes()
{
    const token=this.authService.getToken();

    return this.http.put('https://recipebook-c3c7b.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes());
}
getRecipes()
{
    const token=this.authService.getToken();
    this.http.get('https://recipebook-c3c7b.firebaseio.com/recipes.json?auth='+token)
    .map((response:Response)=>{
        const recipes:Recipe[]=response.json();
        for(let recipe of recipes)
        {
            if(!recipe['ingredients'])
            {
                console.log(recipe);
                recipe['ingredients']=[];
            }
        }
        return recipes;
    })
    .subscribe((recipes:Recipe[])=>{
        this.recipeService.setRecipes(recipes);
    });
}


}