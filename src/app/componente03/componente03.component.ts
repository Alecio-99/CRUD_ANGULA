import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoas } from '../modelo/Pessoas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente03',
  imports: [ReactiveFormsModule, CommonModule],
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

  indice:number = -1;

  cadastrar(){
    //Cadastrar vetor
    this.vetor.push(this.formulario.value as Pessoas);
    
    //limpar inputs
     this.formulario.reset();
    //Vizualizar no console
    //console.table(this.vetor);
  }
  selecionar(indice:number){
this.indice = indice;

this.formulario.setValue({
  nome : this.vetor[indice].nome,
  idade : this.vetor[indice].idade,
  cidade : this.vetor[indice].cidade
});
 
this.btnCadastrar = false;
  }
  alterar(){
    this.vetor[this.indice] = this.formulario.value as Pessoas;

    this.formulario.reset();

    this.btnCadastrar = true;
  }

  remover(){
    this.vetor.splice(this.indice, 1);

    this.formulario.reset();

    this.btnCadastrar = true;
  }
  cancelar(){
    this.formulario.reset();

    this.btnCadastrar = true;
  }
}
