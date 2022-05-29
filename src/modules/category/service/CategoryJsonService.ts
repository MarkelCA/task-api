import Category from "../entity/Category";
import CategoryService from "./CategoryService";
import {CategoryJson} from "../entity/CategoryJson";

export class CategoryJsonService implements CategoryService {
   private categories : Category[] 
    public constructor(categoriesJson : CategoryJson) {
        this.categories = categoriesJson.categories

    }

    getCategories(): Category[] {
        return [...this.categories]
    }
    getCategory(machine_name: string): Category {
        const foundCategory = this.categories.find((category) => {
            return category.machine_name ==  machine_name;
        })

        if(foundCategory == undefined)
            throw new Error('Category not found with this id');

        return foundCategory;
    }

}
