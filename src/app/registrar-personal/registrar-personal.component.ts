import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Personal } from '../personal';
@Component({
  selector: 'app-registrar-personal',
  templateUrl: './registrar-personal.component.html',
  styleUrls: ['./registrar-personal.component.css']
})
export class RegistrarPersonalComponent implements OnInit{

  personal: Personal = new Personal();


  constructor(){}

  ngOnInit(): void {


    console.log(this.personal);
      
  }

  onSubmit(){
    console.log(this.personal);
  }

}
