import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js"

const diretor = new Diretor("Douglas", 10000, 12345678900)
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 1234567009)
gerente.cadastrarSenha("123")



const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const cliente = new Cliente("Lais", "00022299", "389")

const clienteEstalogado = SistemaAutenticacao.login(cliente,"389")
console.log(clienteEstalogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);