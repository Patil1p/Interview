import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { idValidator } from '../../validators/check';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  UsersName = localStorage.getItem('loginKey')
  qty: any = 0;
  value: Array<number> = [];
  inputData!:any;
  totalQty: number = 0;
  totalValue: number = 0;
  invoiceAmount: number = 0;
  discount!: number;
  nextArr !: any
  arr: Array<any> =

    [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 5,
        category: "Accessories",
        quantity: 4,
        date: "1/7/2023",
        inventoryStatus: "INSTOCK",
        rating: 5,
        verified: true
      },
      {
        id: "1001",
        code: "nvl433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 7,
        category: "Accessories",
        quantity: 2,
        date: "1/9/2023",
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        verified: false
      },
      {
        id: "1002",
        code: "zz21cz3",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 7,
        category: "Fitness",
        quantity: 2,
        date: "2/9/2023",
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        verified: false
      },
      {
        id: "1003",
        code: "243wg",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        date: "9/8/2023",
        inventoryStatus: "INSTOCK",
        rating: 5,
        verified: false
      },
      {
        id: "1004",
        code: "h456w",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 3,
        date: "5/8/2023",
        inventoryStatus: "INSTOCK",
        rating: 4,
        verified: false
      },
      {
        id: "1005",
        code: "av22",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 1,
        date: "2/8/2023",
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        verified: false
      },
      {
        id: "1006",
        code: "bibl",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 2,
        category: "Accessories",
        quantity: 5,
        date: "4/7/2023",
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        verified: false
      },
      {
        id: "1009",
        code: "rtel",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        Electronics: "cable",
        quantity: 63,
        date: "3/6/2023",
        inventoryStatus: "INSTOCK",
        rating: 3,
        verified: false
      },
      {
        id: "1012",
        code: "yersa2",
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        date: "2/8/2023",
        inventoryStatus: "INSTOCK",
        rating: 5,
        verified: false
      },
      {
        id: "1013",
        code: "trrew",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        date: "8/2/2023",
        inventoryStatus: "LOWSTOCK",
        rating: 4,
        verified: false
      }
    ]
  tableForm!: FormGroup
  constructor(private _router: Router) { }
  refreshInvAmt(eve: HTMLInputElement) {
    this.calculateDiscount(+eve.value)
  }
  calculateDiscount(disc = 0) {
    this.discount=disc;
    this.invoiceAmount = (100 - (disc)) / 100 * this.totalValue;
  }
  ngOnInit(): void {
    this.createForm();
  }
  ngDoCheck() {
    this.updateQtyValue()
    this.updateCode()
  }
  updateCode() {
  }
  updateQtyValue(index?: number) {
    this.qty = 0;
    this.totalValue = 0;
    let codeVal
    this.rowArray.controls.forEach((ele: any, i) => {
      this.arr.forEach((ele1) => {
        if (ele.value.id === ele1.id) {   
            codeVal = ele1.code;          
          this.rowArray.at(i).patchValue({
            code: ele1.code
          });

        }
      })
      if (this.rowArray.value) {
        this.qty += +ele.value.quantity;
        this.value[i] = +ele.value.quantity * +ele.value.rate
      }
    })
    if (index! > -1) {
    this.value.splice(index!, 1)
    }
    this.value.forEach((ele: number) => {
      this.totalValue = this.totalValue + ele
    })
  }
  updateCommonVariable(): void {
    let sum = 0;
    this.rowArray.controls.forEach((item: FormGroup | any) => {
      const itemValue = this.rowArray.get('quantity')!.value;
      sum += itemValue;
    });
    this.tableForm.patchValue({
      quantity: sum
    });
  }
  createForm() {
    this.tableForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^-?\d*\.?\d*$/)]),
      email: new FormControl(null, [Validators.required, Validators.email,]),
      date: new FormControl(null, [Validators.required, idValidator.dateNotGreaterThanTodayValidator]), 
      rows: new FormArray([
        new FormGroup({
          id: new FormControl(null, [Validators.required, idValidator.validateId]),
     
          code: new FormControl(),
          rate: new FormControl(1),
          quantity: new FormControl(1)
        })
      ]),
      discount:new FormControl(0)
    })
  }

  get rowArray() {
    return this.tableForm.get('rows') as FormArray
  }

  addRow() {
    let formG = new FormGroup({
      id: new FormControl(null),
      code: new FormControl(),
      rate: new FormControl(1),
      quantity: new FormControl(1),
      
    })
    this.rowArray.push(formG);
  }
  onSubmit() {
    console.log(this.tableForm);
    
    let productList:any=[];
    console.log(this.tableForm.value.rows);
    this.tableForm.value.rows.forEach((ele:any) => {
      let prodObj={
        id:ele.id,
        code:ele.code,
        rate:ele.rate,
        quantity:ele.quantity, 
        value: ele.rate* ele.quantity
      }

      productList.push(prodObj);
      
    })
    
    this.inputData = {
      email: this.tableForm.value.email,
      date: this.tableForm.value.date,
      mobile: this.tableForm.value.mobile,
      name: this.tableForm.value.name,
      totalQty:this.qty,
      totalValue:this.totalValue,
      discount:this.tableForm.value.discount,
      invoiceAmt:this.invoiceAmount,
      products:productList
    }
    
    this.discount=0;
    this.invoiceAmount=0;
    this.totalValue=0; 
  }
  onDelete(id: any) {
    this.rowArray.removeAt(id)
    this.updateQtyValue(id)
  }
  isLogout() {
    localStorage.removeItem("loginKey");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User logOut ",
      showConfirmButton: false,
      timer: 3000
    })
    this._router.navigate(['/'])
  }
  keyUp(keys: HTMLInputElement) {
    this.nextArr = this.arr.find(e => e.id === keys.value as string) 
  }
  onclick() {
    this.tableForm.reset()
  }
}

