import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {environment} from 'src/environments/environment'
import firebase from "firebase/app";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myForm!: FormGroup;
    constructor(private fb : FormBuilder  , private router : Router){
      firebase.initializeApp(environment.firebase);
    }
  
      

  ngOnInit() {
    this.myForm = this.fb.group({
      nom : '',
      raison_social : '',
      address : '',
      tel :  '',
      code_postal : '',
      code_douane : '',
      email : '',
      fax : '',
      ville : '',
      motpass : '',
      remotpass : '',


    })
  }
 showinfo(){
  let formObj = this.myForm.getRawValue();
  console.log(formObj)
   var db = firebase.firestore();
   db.collection('utilisateur').add({
    nom : formObj.nom,
    raison_social :  formObj.raison_social,
    address : formObj.address,
    tel :  formObj.tel,
    code_postal :  formObj.code_postal,
    code_douane :  formObj.code_douane,
    email :  formObj.email,
    fax :  formObj.fax,
    ville :  formObj.ville,
    motpass :  formObj.motpass,
   })
    .then((docRef) =>{
      console.log("document written with ID ",docRef.id)
      this.router.navigate(['destinataire']);

    })
    .catch(function(error){
      console.log("problem ",error)
    })
   
 }




}
