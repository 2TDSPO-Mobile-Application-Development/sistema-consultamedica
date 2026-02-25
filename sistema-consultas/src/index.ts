import { Especialidade } from "./types/especialidade";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Medico } from "./interfaces/medico";
import { Consulta } from "./interfaces/consulta";

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