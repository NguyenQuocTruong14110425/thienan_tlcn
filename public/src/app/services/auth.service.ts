import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  options;

  domain = "http://localhost:8080";

  constructor(
    private http: Http


  ) { }

  registerUser(user) {
    return this.http.post(this.domain + '/users/register', user).map(res => res.json());
  }

  loginUser(user) {
    return this.http.post(this.domain + '/users/login', user).map(res => res.json());
  }

  checkUsername(username) {
    return this.http.get(this.domain + '/users/checkUsername/' + username).map(res => res.json());
  }



  checkEmail(email) {
    return this.http.get(this.domain + '/users/checkEmail/' + email).map(res => res.json());
  }
  addproduct(product) {
    return this.http.post(this.domain + '/products/createproduct/' , product).map(res => res.json());
  }
  getAllProducts() {
    return this.http.get(this.domain + '/products/getallproducts' , this.options).map(res => res.json());
  }
  getSingleProduct(id) {
    return this.http.get(this.domain + '/products/singleProduct/' + id, this.options).map(res => res.json());
  }
  editProduct(product) {
    return this.http.put(this.domain + '/products/updateProduct/', product, this.options).map(res => res.json());
  }
  deleteProduct(id) {
    return this.http.delete(this.domain + '/products/deleteproduct/'+ id).map(res => res.json());
  }

}
