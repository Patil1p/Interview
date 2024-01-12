import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { database } from '../model/jsonData';

export class idValidator {
    // static  validateId(control: AbstractControl): ValidationErrors | null{
    //     // return (control: AbstractControl): ValidationErrors | null => {
    //     //   const value = control.value;
    //     // console.log(control.value === );
    //     let val=null;
    //    database.data.find(e=>{
    //     if(e.id === control.value){
           
    //         val=e
            
    //         console.log("Value matched");
            
    //     }else{
    //         val= {"invalid": true}
    //         console.log("Value not matched");
            
    //     }
    //    })
    //    return  val;
    // }
       static validateId(control:AbstractControl):ValidationErrors | null{
        let count = 0;
         
        database.data.forEach(e=>{
                if(e.id === control.value){
                   
                count++
                    
               
                    
                }
               })
               if(count){
                   console.log("Value ssss");
                return null

               }else{
                return {'exact':true}
               }
             
            }
         static   dateNotGreaterThanTodayValidator(control: AbstractControl): ValidationErrors | null {
           
                 const selectedDate = control.value;
                 const today = new Date();
           
                 if (selectedDate > today) {
                   return { dateGreaterThanToday: true };
                 }
           
                 return null;
               };
             }
     
         
       

      



