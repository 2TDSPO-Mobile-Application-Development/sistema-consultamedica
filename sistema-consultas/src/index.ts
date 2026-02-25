import type { Especialidade } from "./types/especialidade";
import type { Paciente } from "./types/paciente";
import type { StatusConsulta } from "./types/statusConsulta";
import type { Medico } from "./interfaces/medico";
import type { Consulta } from "./interfaces/consulta";

const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologista",
};
const medico1: Medico = {
  id: 1,
  nome: "Dr. Paulo Muzy",
  crm: "CRM654321",
  especialidade: cardiologia,
  ativo: true,
};
const paciente1: Paciente = {
  id: 1,
  nome: "Guilherme Macedo",
  cpf: "123.456.789-00",
  email: "guilhermemacedo@email.com",
};

function criarConsulta(
  id: number,
  medico: Medico,
  paciente: Paciente,
  data: Date,
  valor: number
): Consulta {
  return {
    id,
    medico,
    paciente,
    data,
    valor,
    status: "Agendada",
  };
}

//
// MACEDO
//

const consulta1 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(),
  350
);
const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));