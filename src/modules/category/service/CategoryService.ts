import Category from '../entity/Category'
interface CategoryService {
    getCategories() : Category[]
    getCategory()   : Category 
}

export default CategoryService
