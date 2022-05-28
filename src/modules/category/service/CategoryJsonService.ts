import Category from "../entity/Category";
import CategoryService from "./CategoryService";

class CategoryJsonService implements CategoryService {
    getCategories(): Category[] {
        throw new Error("Method not implemented.");
    }
    getCategory(): Category | null {
        throw new Error("Method not implemented.");
    }

}
