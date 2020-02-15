import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isUserSignedIn(){
    if(localStorage.getItem('token')){
      return true;
    } else {
      return false;
    }
  }
}
