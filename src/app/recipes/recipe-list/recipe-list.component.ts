import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'This is simply a test', 'https://s3-media0.fl.yelpcdn.com/bphoto/yzw4zAF9utVQtn6jIuRa8w/o.jpg'),
    new Recipe('Test recipe 2', 'This is simply a test', 'https://s3-media0.fl.yelpcdn.com/bphoto/ABgd0Jy2plKdofnHksXr-g/o.jpg'),
    new Recipe('Test recipe 2', 'This is simply a test', 'https://s3-media0.fl.yelpcdn.com/bphoto/z7HsOPZvIC2iQry2jf2CJg/o.jpg'),
    new Recipe('Test recipe 3', 'This is simply a test', 'https://s3-media0.fl.yelpcdn.com/bphoto/vIG3h1tfFimspbvhlGeB9w/o.jpg')
  ];
}
