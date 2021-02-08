import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { LabelType, Options } from 'ng5-slider';
import { GeneralFilterDialogComponent } from '../../general-dialogs/general-filter-dialog/general-filter-dialog.component';
import { GeneralSortDialogComponent } from '../../general-dialogs/general-sort-dialog/general-sort-dialog.component';

interface ProductNode {
  name: string;
  children?: ProductNode[];
}
interface Brand {
  value: string;
  viewValue: string;
}
interface Quality {
  value: string;
  viewValue: string;
}

const TREE_DATA: ProductNode[] = [
  {
    name: 'آجر',
    children: [
      {name: 'قرمز'},
      {name: 'زرد'},
      {name: 'چم چی'},
    ]
  }, {
    name: 'میلگرد',
    children: [
      {
        name: 'بنفش',
        children: [
          {name: '۱۲میل'},
          {name: '۱۰ میل'},
        ]
      }, {
        name: 'صورتی',
        children: [
          {name: '۴۳میل'},
          {name: '۵۵میل'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-product-subgroup',
  templateUrl: './product-subgroup.component.html',
  styleUrls: ['./product-subgroup.component.css']
})
export class ProductSubgroupComponent implements OnInit {
  choosenQuality = '';
  choosenBrand = '';
  mainPictureUrl = 'https://cdn.isna.ir/d/2020/04/20/4/61618063.jpg';
  mainProducteName = 'میلگرد ۱۸';
  treeControl = new NestedTreeControl<ProductNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ProductNode>();
  typeOfSort = 'minUnitPrice';

  presentedProducts = [
    {
    product: {
      url: 'https://cdn.isna.ir/d/2020/04/20/4/61618063.jpg',
      name: 'بلوک گنده',
      minPrice: '3500',
      maxprice: '8600'
    },
    marketers: [
      {
        name: 'عمران مدرن',
        pricePerUnit: '4400',
        disscount: '5'
      },
      {
        name: 'عمران مدرن',
        pricePerUnit: '4400',
        disscount: '5'
      },
      {
        name: 'عمران مدرن',
        pricePerUnit: '4400',
        disscount: '5'
      }
    ]
  },
  {
    product: {
      url: 'https://cdn.isna.ir/d/2020/04/20/4/61618063.jpg',
      name: 'بلوک گنده',
      minPrice: '3500',
      maxprice: '8600'
    },
    marketers: [
      {
        name: 'عمران مدرن',
        pricePerUnit: '4400',
        disscount: '5'
      },
      {
        name: 'عمران مدرن',
        pricePerUnit: '4400',
        disscount: '5'
      },
      {
        name: 'عمران مدرن',
        pricePerUnit: '4400',
        disscount: '5'
      }
    ]
  }];

  minValue = 1000;
  maxValue = 4000;
  options: Options = {
    floor: 300,
    ceil: 4500,
    logScale: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>از:</b>' + value + 'تومان';
        case LabelType.High:
          return '<b>تا:</b>' + value + 'تومان';
        default:
          return 'تومان' + value;
      }
    }
  };

  brands: Brand[] = [
    {value: 'چم', viewValue: 'چم'},
    {value: 'چم-1', viewValue: 'چم ۱'},
    {value: 'چم ۲', viewValue: 'چم ۲'}
  ];

  qualities: Quality[] = [
    {value: 'چم', viewValue: 'چم'},
    {value: 'چم-1', viewValue: 'چم ۱'},
    {value: 'چم ۲', viewValue: 'چم ۲'}
  ];
  realatedServices = [{
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰'
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰'
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰'
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰'
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰'
  }, {
    title: 'میلگرد اسدی',
    picture: 'https://www.asroon.ir/uploads/products/milgerd/%D8%A2%D8%AC%D8%AF%D8%A7%D8%B1/%DA%AF%D8%A7%D9%84%D8%B1%DB%8C%20%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C%20%D8%A7%D8%AC%D9%85%D8%A7%D9%84%DB%8C/B1.jpg',
    unit: 'دونه',
    price: '۱۶۰۰۰'
  }];

  constructor(public dialog: MatDialog, private rendrer: Renderer2) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {

  }
  goToRemoveClass(): void{
    setTimeout(() => {
    this.rendrer.setStyle(document.getElementsByClassName('cdk-overlay-connected-position-bounding-box').item(0), 'right', '0');
    console.log(document.getElementsByClassName('cdk-overlay-connected-position-bounding-box').item(0));

    }, 100);
  }

  sort(btn: HTMLButtonElement): void {
    document.getElementsByClassName('active').item(0).classList.remove('active');
    btn.classList.add('active');

  }

  hasChild = (_: number, node: ProductNode) => !!node.children && node.children.length > 0;

  openGeneralSortDialog(): void {
    const sortDialogRef = this.dialog.open(GeneralSortDialogComponent, {
      width: '400px',
      height: '600px',
      data: {typeOfSort: this.typeOfSort}
    });

    sortDialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  openGeneralFilterDialog(): void {
    const filterDialogRef = this.dialog.open(GeneralFilterDialogComponent, {
      width: '400px',
      height: '600px',
      data: {qualities: this.qualities, brands: this.brands, minValue: this.minValue, maxValue: this.maxValue, options: this.options}
    });

    filterDialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
        this.minValue = result.minValue;
        this.maxValue = result.maxValue;
        if (result.choosenBrand !== undefined) {
          this.choosenBrand = result.choosenBrand;
        }
        if (result.choosenQuality !== undefined) {
          this.choosenQuality = result.choosenQuality;
        }
      }
    });
  }

}
