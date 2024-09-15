import { Injectable } from '@angular/core';
import { Category } from '../../../common/category';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category(<Category>{ 'id': 1, 'name': 'Pop' }),
    new Category(<Category>{ 'id': 2, 'name': 'Rock' }),
    new Category(<Category>{ 'id': 3, 'name': 'Electronic' }),
    new Category(<Category>{ 'id': 4, 'name': 'Hip-Hop' }),
    new Category(<Category>{ 'id': 5, 'name': 'KPop' }),
    new Category(<Category>{ 'id': 6, 'name': 'Indie' })
  ];

  private appURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCategories(): Category[] {
    return this.categories;
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.appURL + "/category")
      .pipe(
        retry(2)
      );
  }

  getCategorybyId(id: number): Category | null {
    let category = this.categories.find(c => c.id === id);
    if (!category) {
      return null;
    } else
      return category;
  }
}
