import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';


ngOnInit()
{
  firebase.initializeApp({
    apiKey:"AIzaSyC536oUawhliyb3ZCkDO6Z82d2Aq4E1Zlc",
    authDomain:"recipebook-c3c7b.firebaseapp.com"
  })

}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
}
