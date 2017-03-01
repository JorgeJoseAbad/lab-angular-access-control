import { Component, OnInit } from '@angular/core';
import { LogRegisterService } from '../log-register.service';

 @Component({
   selector: 'app-log-form-component',
   templateUrl: './log-form-component.component.html',
   styleUrls: ['./log-form-component.component.css'],
   providers: [LogRegisterService]
  })
  export class LogFormComponentComponent implements OnInit {

     constructor(public logRegisterService: LogRegisterService) { }

     ngOnInit() {
     }

     submitForm(myForm){
       console.log(myForm);
       this.logRegisterService.addRegister(myForm.value.person, myForm.value.message);
       alert('Added person to log!');

       for (let i = 0; i < this.logRegisterService.logMessages.length; i++){
         let message = this.logRegisterService.logMessages[i];
         let message2 = this.logRegisterService.getRegisters()[i];
         console.log(message);
         console.log(message2);
         console.log((i + 1) + ". " + message['person'] + ", " + message['message']+", "+message['createdAt']);
         console.log((i + 1) + ". " + message2['person'] + ", " + message2['message']+", "+message2['createdAt']);

       }
     }

 }
