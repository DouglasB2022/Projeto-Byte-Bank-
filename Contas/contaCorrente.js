import {Cliente} from  "./Cliente.js"
import { Conta } from "./Conta.js";
export class contaCorrente extends Conta {

    static numeroDeContas = 0;
 //#saldo = signfica que o atributo desta classe é privado, 
    //portanto não pode haver alterações fora da classe.

        

        constructor(saldoInicial, cliente, agencia){
            super (0, cliente, agencia);
            contaCorrente.numeroDeContas++;
        }

        sacar(valor){
            let taxa = 1.1;
            const valorSacado = taxa * valor
             if(this._saldo >= valorSacado){
             this._saldo -= valorSacado;
             return valorSacado;
         }
     }
    };
