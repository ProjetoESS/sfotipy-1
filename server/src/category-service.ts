import { Category } from '../../common/category';

export class CategoryService {
  categories: Category[] = [
    new Category(<Category>{ 'id': 1, 'name': 'Pop' }),
    new Category(<Category>{ 'id': 2, 'name': 'Rock' }),
    new Category(<Category>{ 'id': 3, 'name': 'Electronic' }),
    new Category(<Category>{ 'id': 4, 'name': 'Hip-Hop' }),
    new Category(<Category>{ 'id': 5, 'name': 'KPop' }),
    new Category(<Category>{ 'id': 6, 'name': 'Indie' })
  ];

  get(): Category[] {
    return this.categories;
  }

  getById(categoryId: number): Category {
    return this.categories.find(({ id }) => id == categoryId);
  }
}
