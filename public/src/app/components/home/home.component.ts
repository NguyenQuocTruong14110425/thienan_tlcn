import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productposts: any;

  constructor(
    private AuthService: AuthService
  ) { }
  getAllProducts() {
    // Function to GET all blogs from database
    this.AuthService.getAllProducts().subscribe(data => {
      this.productposts = data.product; // Assign array to use in HTML
    });
  }
  ngOnInit() {
    this.getAllProducts();
  }

}
