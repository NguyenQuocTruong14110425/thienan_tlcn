import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adproduct',
  templateUrl: './adproduct.component.html',
  styleUrls: ['./adproduct.component.css']
})
export class AdproductComponent implements OnInit {
  productposts: any;
  newProduct = false;
  message;
  messageClass;
  processing= false;
  nameproductMessage;

  form: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {

    this.createForm();
  }
  createForm() {  
    this.form = this.FormBuilder.group({
      nameproduct: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        this.validatenameproduct
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        
      ])],
      price: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
       
      ])],
      image: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        
      ])],
      color: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        
      ])],
      size: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),
        
      ])],
      catalog: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),      
      ])]
    });
    
  }
  // Function to display new blog form
  newProductForm() {
    this.newProduct = true; // Show new blog form
  }
  goBack() {
    window.location.reload(); // Clear all variable states
  }
  getAllProducts() {
    // Function to GET all blogs from database
    this.AuthService.getAllProducts().subscribe(data => {
      this.productposts = data.product; // Assign array to use in HTML
    });
  }
  validatenameproduct(controls) {
    const regExp =
      new RegExp(/^[a-zA-Z0-9\s]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validatenameproduct': true }
    }
  }
  addproductSubmit() {
    this.processing = true;
    const product = {
      nameproduct: this.form.get('nameproduct').value,
      description: this.form.get('description').value,
      price: this.form.get('price').value,
      image: this.form.get('image').value,
      color: this.form.get('color').value,
      size: this.form.get('size').value,
      catalog: this.form.get('catalog').value
    }
    
    this.AuthService.addproduct(product).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/home']); // Redirect to login view
        }, 2000);
      }
    });
  }

  onDeleteProductsubmit(id:string) {
    console.log(id);
    this.AuthService.deleteProduct(id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.getAllProducts();
      }
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }

}