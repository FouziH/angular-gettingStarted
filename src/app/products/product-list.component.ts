import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage ='';
  //   listFilter: string = 'cart';
  //   count: number =0;

  //declaring a private variable called filter and set it to empty string
  private _listFilter: string = '';

  //declaring a getter method called listFilter. This getter method will return a string data type
  get listFilter(): string {
    //here wer are returning a the private variable name using this
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setters method, value is set to', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts:IProduct[] = [];
  products: IProduct[] = [];


  constructor(private productService : ProductService) {

  }
  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().includes(filterBy))
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
    console.log(this.showImage);
  }

  //on Init is similar to useEffect hook in react
  ngOnInit(): void {
    console.log('In OnInit');
    this.sub = this.productService.getProducts().subscribe({
      next: this.products => this.products = this.products, 
      error: err => this.errorMessage = err
    });
    this.filteredProducts = this.products;
    // this.listFilter = '';
  }
  onRatingClicked(message: string):void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
