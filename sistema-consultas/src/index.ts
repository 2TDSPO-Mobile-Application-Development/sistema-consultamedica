import type { Especialidade } from "./types/especialidade";
import type { Paciente } from "./types/paciente";
import type { StatusConsulta } from "./types/statusConsulta";
import type { Medico } from "./interfaces/medico";
import type { Consulta } from "./interfaces/consulta";

// Dados Base
const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologista",
  descricao: "O médico cardiologista é o especialista responsável por diagnosticar, tratar e prevenir doenças do coração e do sistema circulatório, como hipertensão, infarto, arritmias e insuficiência cardíaca."
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
  telefone: "11 95023-5545"
};

// Funções Tipadas
// Função para criar consulta
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

// Função para confirmar a consulta
function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "Confirmada",
  };
}

// Função para cancelar a consulta
function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "Realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "Cancelada",
  };
}

// Função para exibir a consulta
function exibirConsulta(consulta: Consulta): string {
  const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}

// Execução no Index
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






