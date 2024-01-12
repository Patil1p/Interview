import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { idValidator } from '../../validators/check';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  qty:any=0;
  value :Array<number>=[];
  inputData:Array<any> =[]
   totalQty:number =0;
   totalValue:number =0;
   invoiceAmount:number =0;
   discount!:number;
   
  nextArr !:any

  arr : Array<any> = 
   
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
  constructor(private _router:Router) { }

  ngOnInit(): void {

    this.createForm();
    console.log(this.rowArray.value.rate);
    
  }

  ngDoCheck(){
    this.updateQtyValue()
  }
  
  updateQtyValue(index?:number){
    this.qty= 0;
    this.totalValue = 0;
    console.log(this.rowArray.value);  
    this.rowArray.controls.forEach((ele: any, i ) => {
      console.log(+ele.value.rate);
      if(this.rowArray.value){
        this.qty+=+ele.value.quantity;
        this.value[i]=+ele.value.quantity*+ele.value.rate
        console.log(this.qty, +ele.value.quantity);
          
      }
      // this
    })  
      if(index! >-1){
        
        console.log(index);
         console.log(this.value)
        this.value.splice(index! , 1)
        console.log(this.value);
        
      }
    this.value.forEach((ele :number) =>{
      this.totalValue = this.totalValue+ele

    })
    console.log( this.totalValue);
  }
  
  updateCommonVariable(): void {
    let sum = 0;

    // Iterate through the form controls in the FormArray
    this.rowArray.controls.forEach((item: FormGroup |any) => {
      const itemValue = this.rowArray.get('quantity')!.value;
      // const itemValue = this.rowArray.get('quantity')!.value;
      sum += itemValue;
    });

  
    this.tableForm.patchValue({
      quantity: sum
    });
  }

  addValueToItem(index: number, valueToAdd: HTMLInputElement): void {
    const currentItemValue = this.rowArray.at(index).get('quantity')?.value;
    console.log(currentItemValue, index, valueToAdd);
    
    if(valueToAdd.value === ''){
      this.rowArray.at(index).patchValue({
        quantity: 0
      });
      this.totalQty=0;
    }else{
      this.rowArray.at(index).patchValue({
        quantity: currentItemValue - +valueToAdd.value
      });
    }
    

    this.updateCommonVariable();
  }

  // subtractValueFromItem(index: number, valueToSubtract: number): void {
  //   const currentItemValue = this.rowArray.at(index).get('quantity')?.value;
  //   this.rowArray.at(index).patchValue({
  //     itemValue: currentItemValue - valueToSubtract
  //   });

  //   this.updateCommonVariable();
  // }

  updateQty(){
    console.log(("update"));
    
    this.rowArray.controls.forEach((ele: any) => {
      console.log(+ele.value.rate);
      if(this.rowArray.value){
        this.totalQty+=+ele.value.quantity;
      }else if(this.rowArray.value===''){
        this.totalQty=0;
      }
      // this
    }) 
  }

  createForm() {
    this.tableForm = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    mobile:new FormControl(null,[Validators.required,Validators.pattern(/^\d{6,10}$/),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    date:new FormControl(null,[Validators.required, idValidator.dateNotGreaterThanTodayValidator]),
      rows: new FormArray([
        new FormGroup({
         id: new FormControl(null,[ Validators.required, idValidator.validateId]),
      value  : new FormControl(),
      code  : new FormControl(),
      rate  : new FormControl(1),
      quantity  : new FormControl(1)


        })

      ])
    })
  }

  get rowArray() {
    return this.tableForm.get('rows') as FormArray
  }
  addRow() {
    let formG = new FormGroup({
      id: new FormControl(null),
      code  : new FormControl(),
      rate  : new FormControl(1),
      quantity  : new FormControl(1),
      value  : new FormControl()
    })

    this.rowArray.push(formG);
  }


  onSubmit() { 
    
    let obj ={
     email: this.tableForm.value.email,
      date  :this.tableForm.value.date,
      mobile   : this.tableForm.value.mobile,
      name  : this.tableForm.value.name
      
    }
 
    this.inputData.push(obj)
    this.tableForm.reset()
  }

  onDelete(id:any){
    console.log(id);
    this.rowArray.removeAt(id)
   this.updateQtyValue(id)
    
  }

  isLogout(){
    localStorage.removeItem("loginKey");
    this._router.navigate(['/'])
  }

  keyUp(keys:HTMLInputElement){

    console.log(typeof this.arr.find(e=>e.id===keys.value));
    
    this.nextArr =this.arr.find(e=>e.id===keys.value as string)
  
  }

  onclick(){
    this.tableForm.reset()
  }

  }

