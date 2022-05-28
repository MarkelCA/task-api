import Category from '../entity/Category'
interface CategoryService {
    getCategories() : Category[]
    getCategory()   : Category | null
}

export default CategoryService
