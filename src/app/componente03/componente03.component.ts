import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoas } from '../modelo/Pessoas';

@Component({
  selector: 'app-componente03',
  imports: [ReactiveFormsModule],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.scss'
})
export class Componente03Component {


  formulario = new FormGroup({
    nome : new FormControl('',   [Validators.required, Validators.minLength(3)]),
    idade :new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  btnCadastrar:boolean = true; 

  vetor:Pessoas[] = [];

  cadastrar(){
    //Cadastrar vetor
    this.vetor.push(this.formulario.value as Pessoas);
    
    //limpar inputs
     this.formulario.reset();
    //Vizualizar no console
    console.table(this.vetor);
  }
}
