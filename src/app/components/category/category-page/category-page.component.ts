import { RepositoryService } from './../../../services/repository.service';
import { Category } from './../../../interfaces/category';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { LabelType, Options } from 'ng5-slider';
import { GeneralFilterDialogComponent } from '../../general-dialogs/general-filter-dialog/general-filter-dialog.component';
import { GeneralSortDialogComponent } from '../../general-dialogs/general-sort-dialog/general-sort-dialog.component';
import { ActivatedRoute } from '@angular/router';


interface ProductNode {
  name: string;
  subMenu?: ProductNode[];
}
interface Brand {
  value: string;
  viewValue: string;
}
interface Quality {
  value: string;
  viewValue: string;
}

// const TREE_DATA: ProductNode[] = [
//   {
//     name: 'آجر',
//     subMenu: [
//       {name: 'قرمز'},
//       {name: 'زرد'},
//       {name: 'چم چی'},
//     ]
//   }, {
//     name: 'میلگرد',
//     subMenu: [
//       {
//         name: 'بنفش',
//         subMenu: [
//           {name: '۱۲میل'},
//           {name: '۱۰ میل'},
//         ]
//       }, {
//         name: 'صورتی',
//         subMenu: [
//           {name: '۴۳میل'},
//           {name: '۵۵میل'},
//         ]
//       },
//     ]
//   },
// ];

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  treeData: any;
  typeMode = '';
  initialized = false;
  productsList = [];
  choosenQuality = '';
  choosenBrand = '';
  mainPictureUrl = 'https://cdn.isna.ir/d/2020/04/20/4/61618063.jpg';
  mainProducteName = 'میلگرد ۱۸';
  treeControl = new NestedTreeControl<ProductNode>(node => node.subMenu);
  dataSource = new MatTreeNestedDataSource<ProductNode>();
  typeOfSort = 'minUnitPrice';

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


  constructor(private repository: RepositoryService, private activatedRoute: ActivatedRoute, public dialog: MatDialog,
              private rendrer: Renderer2)
  {}

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');

    this.repository.getCategoryBySlug(slug).subscribe(res => {
      this.category = res;
      this.repository.getTreeCategories(this.category.id).subscribe(response => {
        this.dataSource.data = response;
      });
      this.typeMode = this.category.type ? 'materials' : 'services';
      this.productsList = res.mother_materials_list.length === 0 ? res.mother_services_list : res.mother_materials_list;
      this.initialize();
      this.initialized = true;
    });
  }

  initialize(): void {
    for (const product of this.productsList) {
      product.images = product.images.toString().split(',');
      product.max = 0;
      product.min = 3000000000000000;
      product.sellerProducts = [];
      const materialOrService = product.services_list ? product.services_list : product.materials_list ;
      for (const child of materialOrService) {
        for (const seller of child.sellers_list)  {
          product.sellerProducts.push(seller);
          if ( product.min > seller.prices[0].amount) {
            product.min = seller.prices[0].amount;
          }
          if ( product.max < seller.prices[0].amount) {
            product.max = seller.prices[0].amount;
          }
        }


      }
    }
  }

  sort(btn: HTMLButtonElement): void {
    document.getElementsByClassName('active').item(0).classList.remove('active');
    btn.classList.add('active');

  }

  hasChild = (_: number, node: ProductNode) => !!node.subMenu && node.subMenu.length > 0;

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
