import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {environment} from 'src/environments/environment'
import firebase from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: 'app-destinataire',
  templateUrl: './destinataire.component.html',
  styleUrls: ['./destinataire.component.css']
})
export class DestinataireComponent implements OnInit {


  myForm!: FormGroup;

  constructor(private fb : FormBuilder , private router : Router){
    firebase.initializeApp(environment.firebase);
  }
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      nom_d : '',
      prenom_d : '',
      address_d : '',
      tel_d :  '',
      code_postal_d : '',
      code_douane_d : '',
      email_d : '',
      fax : '',
      ville : '',
      country : '',
    
    })
    


    
  }
  showinfo(){
    let formObj = this.myForm.getRawValue();
    console.log(formObj)
     var db = firebase.firestore();
     db.collection('destination').add({
       
        nom : formObj.nom_d,
        prenom :  formObj.prenom_d,
        address : formObj.address_d,
        tel :  formObj.tel_d,
        code_postal :  formObj.code_postal_d,
        code_douane :  formObj.code_douane_d,
        email :  formObj.email_d,
        fax :  formObj.fax,
        ville :  formObj.ville,
        country : formObj.country 
     })
      .then((docRef) =>{
        console.log("document written with ID ",docRef.id)
        this.router.navigate(['article']);
      })
      .catch(function(error){
        console.log("problem ",error)
      })
  
    }
}
