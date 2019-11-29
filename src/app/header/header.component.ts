import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import {  Response } from '@angular/http'; 
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

constructor(private datastorageservice:DataStorageService,private authService:AuthService){
}

  onSaveData()
  {
this.datastorageservice.storeRecipes().subscribe((response:Response)=>{
console.log(response);

})
  }

  onFetchData()
  {
    this.datastorageservice.getRecipes();
  }
  onLogout()
  {
    this.authService.logOut();
  }

}



