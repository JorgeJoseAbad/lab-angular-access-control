import { Component, OnInit } from '@angular/core';
import { LogRegisterService } from '../services/log-register.service';

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
       console.log(myForm.value.person);
       console.log(myForm.value.message);
       this.logRegisterService.addAccessItem(myForm.value.person, myForm.value.message);
       alert('Added new person to log!');

       for (let i = 0; i < this.logRegisterService.logMessages.length; i++){
         let message = this.logRegisterService.logMessages[i];
         let message2 = this.logRegisterService.getAccessLog()[i];
         console.log(message);
         console.log(message2);
         console.log((i + 1) + ". " + message['person'] + ", " + message['message']+", "+message['createdAt']);
         console.log((i + 1) + ". " + message2['person'] + ", " + message2['message']+", "+message2['createdAt']);

       }
     }

 }
