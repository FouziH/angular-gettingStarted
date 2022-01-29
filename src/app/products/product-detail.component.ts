import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  productProducts: String[] = ['Hamza', 'Fowzi', 'Mohamed', 'Ali', "Abdi", "Dhalin", "Sharmarke","Warfaa", "Xandun", "Guled"]
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pageTitle += `: ${id}`;
  
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-001',
      'releaseDate': 'MArch 19, 2021',
      'description': 'Leaf rake with 48 inch wooden handle',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    };

    this.productProducts.forEach(items => {

      console.log(items)
      return items.split(' ');
    })
  }
  

   onBack () : void {
    this.router.navigate(['/products']);
    console.log('back button is clicked')
  }

}
