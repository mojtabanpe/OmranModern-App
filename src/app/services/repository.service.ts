import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
baseUrl = environment.serverUrl;
constructor(private http: HttpClient) { }


getMotherMaterialBySlug(slug: string): any {
  return this.http.get(this.baseUrl + 'dokkoon/mother_material_by_slug/' + slug);
}
getMotherMaterialPage(id: number): any {
  return this.http.get(this.baseUrl + 'dokkoon/mother_material_page/' + id);
}

getMotherServiceBySlug(slug: string): any {
  return this.http.get(this.baseUrl + 'dokkoon/mother_service_by_slug/' + slug);
}

getMotherServicePage(id: number): any {
  return this.http.get(this.baseUrl + 'dokkoon/mother_service_page/' + id);
}

getCategoryBySlug(slug: string): any {
  return this.http.get(this.baseUrl + 'dokkoon/category_by_slug/' + slug);
}
getCategoryPageBySlug(slug: string): any {
  return this.http.get(this.baseUrl + 'dokkoon/category_page_by_slug/' + slug);
}
getRelatedCategories(categoryId): any {
  return this.http.get(this.baseUrl + 'dokkoon/related_categories/' + categoryId);
}
getSellerBySlug(slug: string): any {
  return this.http.get(this.baseUrl + 'dokkoon/seller_by_slug/' + slug);
}
getRelatedImages(related): any {
  return this.http.post(this.baseUrl + 'dokkoon/related_images/', related);
}
getMenu(): any {
  return this.http.get(this.baseUrl + 'dokkoon/menu/');
}
SubmitComment(comment): any {
  return this.http.post(this.baseUrl + 'dokkoon/unapproved_comments', comment);
}
getTreeCategories(id): any {
  return this.http.get(this.baseUrl + 'dokkoon/tree_categories/' + id);
}
}
