import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: String = 'Product List';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      ProductCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/image/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Garden Cart',
      ProductCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/image/garden_cart.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      ProductCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/image/garden_cart.png'
    },
  ];
}