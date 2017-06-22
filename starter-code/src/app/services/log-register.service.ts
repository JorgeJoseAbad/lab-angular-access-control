import { Injectable } from '@angular/core';

 @Injectable()
 export class LogRegisterService {
      logMessages: Object[];
      personToAdd: Object = {};

    constructor() {
       this.logMessages = [];
     }

     getAccessLog(){
       return this.logMessages;
    }

     addAccessItem(person: string, message: string){
       this.personToAdd = {person, message, createdAt: new Date()};
       console.log(this.personToAdd);
       this.logMessages.push(this.personToAdd);
       console.log(this.logMessages);
     }

 }
