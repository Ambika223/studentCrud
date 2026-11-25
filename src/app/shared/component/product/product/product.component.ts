import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IproductArr } from 'src/app/shared/model/productinterface';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('productName') productName!: ElementRef<HTMLInputElement>;
  @ViewChild('brand') brand!: ElementRef<HTMLInputElement>;
  @ViewChild('category') category!: ElementRef<HTMLInputElement>;
  @ViewChild('price') price!: ElementRef<HTMLInputElement>;
  @ViewChild('discount') discount!: ElementRef<HTMLInputElement>;
  @ViewChild('rating') rating!: ElementRef<HTMLInputElement>;
  @ViewChild('color') color!: ElementRef<HTMLInputElement>;
  @ViewChild('size') size!: ElementRef<HTMLInputElement>;
  @ViewChild('stock') stock!: ElementRef<HTMLInputElement>;
  @ViewChild('isAvailable') isAvailable!: ElementRef<HTMLInputElement>;
  @ViewChild('isFeatured') isFeatured!: ElementRef<HTMLInputElement>;
  @ViewChild('warranty') warranty!: ElementRef<HTMLInputElement>;
  @ViewChild('description') description!: ElementRef<HTMLInputElement>;
  @ViewChild('imageUrl') imageUrl!: ElementRef<HTMLInputElement>;



  constructor(private _uuidService: UuidService,
    private _SnackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  isOnEditMode: boolean = false;
  editId!: string;

  productArr: IproductArr[] = [
    {
      id: "101",
      productName: "iPhone 15",
      brand: "Apple",
      category: "Mobile",
      price: 79999,
      discount: 10,
      rating: 4.8,
      color: "Black",
      size: "128GB",
      stock: 25,
      isAvailable: true,
      isFeatured: true,
      warranty: "1 Year",
      description: "Apple smartphone with advanced camera",
      imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800"
    },
    {
      id: "102",
      productName: "Galaxy S24",
      brand: "Samsung",
      category: "Mobile",
      price: 74999,
      discount: 12,
      rating: 4.7,
      color: "Blue",
      size: "256GB",
      stock: 18,
      isAvailable: true,
      isFeatured: true,
      warranty: "1 Year",
      description: "Premium Samsung smartphone",
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
    },
    {
      id: "103",
      productName: "MacBook Air M2",
      brand: "Apple",
      category: "Laptop",
      price: 99999,
      discount: 8,
      rating: 4.9,
      color: "Silver",
      size: "512GB",
      stock: 12,
      isAvailable: true,
      isFeatured: true,
      warranty: "1 Year",
      description: "Lightweight laptop with M2 processor",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
    },
    {
      id: "104",
      productName: "Dell Inspiron 15",
      brand: "Dell",
      category: "Laptop",
      price: 62999,
      discount: 15,
      rating: 4.4,
      color: "Grey",
      size: "512GB",
      stock: 20,
      isAvailable: true,
      isFeatured: false,
      warranty: "2 Years",
      description: "Laptop for office and daily usage",
      imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
    },
    {
      id: "105",
      productName: "Sony WH-1000XM5",
      brand: "Sony",
      category: "Headphones",
      price: 29999,
      discount: 10,
      rating: 4.8,
      color: "Black",
      size: "Standard",
      stock: 0,
      isAvailable: false,
      isFeatured: true,
      warranty: "1 Year",
      description: "Wireless noise cancelling headphones",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
    },
    {
      id: "106",
      productName: "Apple Watch Series 9",
      brand: "Apple",
      category: "Smartwatch",
      price: 41999,
      discount: 5,
      rating: 4.6,
      color: "Midnight",
      size: "45mm",
      stock: 15,
      isAvailable: true,
      isFeatured: true,
      warranty: "1 Year",
      description: "Smartwatch with health tracking features",
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
    },
    {
      id: "107",
      productName: "Canon EOS 1500D",
      brand: "Canon",
      category: "Camera",
      price: 39999,
      discount: 12,
      rating: 4.5,
      color: "Black",
      size: "24MP",
      stock: 8,
      isAvailable: true,
      isFeatured: false,
      warranty: "2 Years",
      description: "DSLR camera for photography beginners",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"
    },
    {
      id: "108",
      productName: "iPad Air",
      brand: "Apple",
      category: "Tablet",
      price: 59999,
      discount: 7,
      rating: 4.7,
      color: "Purple",
      size: "256GB",
      stock: 10,
      isAvailable: true,
      isFeatured: true,
      warranty: "1 Year",
      description: "Powerful tablet for productivity",
      imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800"
    },
    {
      id: "109",
      productName: "Nike Air Max",
      brand: "Nike",
      category: "Shoes",
      price: 8999,
      discount: 20,
      rating: 4.3,
      color: "White",
      size: "UK 9",
      stock: 30,
      isAvailable: true,
      isFeatured: false,
      warranty: "6 Months",
      description: "Comfortable sports shoes",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    },
    {
      id: "110",
      productName: "Adidas Ultraboost",
      brand: "Adidas",
      category: "Shoes",
      price: 12999,
      discount: 15,
      rating: 4.6,
      color: "Black",
      size: "UK 8",
      stock: 22,
      isAvailable: true,
      isFeatured: true,
      warranty: "6 Months",
      description: "Running shoes with comfortable cushioning",
      imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    },
    {
      id: "111",
      productName: "Logitech MX Master 3S",
      brand: "Logitech",
      category: "Mouse",
      price: 9999,
      discount: 10,
      rating: 4.7,
      color: "Graphite",
      size: "Standard",
      stock: 0,
      isAvailable: false,
      isFeatured: false,
      warranty: "1 Year",
      description: "Wireless ergonomic computer mouse",
      imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
    },
    {
      id: "112",
      productName: "Samsung 4K Smart TV",
      brand: "Samsung",
      category: "Television",
      price: 54999,
      discount: 18,
      rating: 4.5,
      color: "Black",
      size: "55 Inch",
      stock: 7,
      isAvailable: true,
      isFeatured: true,
      warranty: "2 Years",
      description: "Smart television with 4K resolution",
      imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800"
    },
    {
      id: "113",
      productName: "JBL Flip 6",
      brand: "JBL",
      category: "Speaker",
      price: 11999,
      discount: 10,
      rating: 4.4,
      color: "Red",
      size: "Portable",
      stock: 16,
      isAvailable: true,
      isFeatured: false,
      warranty: "1 Year",
      description: "Portable Bluetooth waterproof speaker",
      imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800"
    },
    {
      id: "114",
      productName: "HP Pavilion Keyboard",
      brand: "HP",
      category: "Keyboard",
      price: 2499,
      discount: 5,
      rating: 3,
      color: "White",
      size: "Full Size",
      stock: 40,
      isAvailable: true,
      isFeatured: false,
      warranty: "1 Year",
      description: "Wireless keyboard for everyday computing",
      imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800"
    },
    {
      id: "115",
      productName: "Mi Power Bank 20000",
      brand: "Xiaomi",
      category: "Accessories",
      price: 2199,
      discount: 15,
      rating: 2,
      color: "Black",
      size: "20000mAh",
      stock: 35,
      isAvailable: true,
      isFeatured: true,
      warranty: "6 Months",
      description: "Fast charging portable power bank",
      imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800"
    }
  ];

  trackById(index: number, product: IproductArr): string {
    return product.id;
  }

  private resetForm(): void {
    this.productName.nativeElement.value = '';
    this.brand.nativeElement.value = '';
    this.category.nativeElement.value = '';
    this.price.nativeElement.value = '';
    this.discount.nativeElement.value = '';
    this.rating.nativeElement.value = '';
    this.color.nativeElement.value = '';
    this.size.nativeElement.value = '';
    this.stock.nativeElement.value = '';
    this.isAvailable.nativeElement.value = '';
    this.isFeatured.nativeElement.value = '';
    this.warranty.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.imageUrl.nativeElement.value = '';
  }


  onAddProduct() {
    let productobj: IproductArr = {
      productName: this.productName.nativeElement.value,
      brand: this.brand.nativeElement.value,
      category: this.category.nativeElement.value,
      price: +this.price.nativeElement.value,
      discount: +this.discount.nativeElement.value,
      rating: +this.rating.nativeElement.value,
      color: this.color.nativeElement.value,
      size: this.size.nativeElement.value,
      stock: +this.stock.nativeElement.value,
      isAvailable: this.isAvailable.nativeElement.value === 'Available',
      isFeatured: this.isFeatured.nativeElement.value === 'yes',
      warranty: this.warranty.nativeElement.value,
      description: this.description.nativeElement.value,
      imageUrl: this.imageUrl.nativeElement.value,
      id: this._uuidService.getUUID()
    }
    this.productArr.push(productobj);
    this.resetForm();
  }


  //EDIT
  onEdit(prd: IproductArr) {
    this.productName.nativeElement.value = prd.productName;
    this.brand.nativeElement.value = prd.brand;
    this.category.nativeElement.value = prd.category;
    this.price.nativeElement.value = prd.price.toString();
    this.discount.nativeElement.value = prd.discount.toString();
    this.rating.nativeElement.value = prd.rating.toString();
    this.color.nativeElement.value = prd.color;
    this.size.nativeElement.value = prd.size;
    this.stock.nativeElement.value = prd.stock.toString();
    this.isAvailable.nativeElement.value = prd.isAvailable ? 'Available' : 'Out of Stock';
    this.isFeatured.nativeElement.value = prd.isFeatured ? 'yes' : 'no';
    this.warranty.nativeElement.value = prd.warranty;
    this.description.nativeElement.value = prd.description;
    this.imageUrl.nativeElement.value = prd.imageUrl;
    this.editId = prd.id;
    this.isOnEditMode = true;
  }

  //update
  onUpdateProduct() {
    let updateObj: IproductArr = {
      productName: this.productName.nativeElement.value,
      brand: this.brand.nativeElement.value,
      category: this.category.nativeElement.value,
      price: +this.price.nativeElement.value,
      discount: +this.discount.nativeElement.value,
      rating: +this.rating.nativeElement.value,
      color: this.color.nativeElement.value,
      size: this.size.nativeElement.value,
      stock: +this.stock.nativeElement.value,
      isAvailable: this.isAvailable.nativeElement.value === 'Available',
      isFeatured: this.isFeatured.nativeElement.value === 'yes',
      warranty: this.warranty.nativeElement.value,
      description: this.description.nativeElement.value,
      imageUrl: this.imageUrl.nativeElement.value,
      id: this.editId
    }
    let updateIndex = this.productArr.findIndex(p => p.id === this.editId);
    if (updateIndex > -1) {
      this.productArr[updateIndex] = updateObj;
      this.isOnEditMode = false;
      this.editId = '';
      this.resetForm();
    }
  }

  //DELETE
  onremove(prd: IproductArr) {
    let getConfirm = confirm(`Are You Sure You want to remove this product`);
    if (getConfirm) {
      let removeIndex = this.productArr.findIndex(p => prd.id === prd.id);
      this.productArr.splice(removeIndex, 1);
    }
  }



}
