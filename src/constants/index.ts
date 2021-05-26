import Axios from "axios";
import { DatagridColumns } from "../components/DataCreation";

const baseURL: string =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001/mapeamento-cultural/us-central1/api"
    : "https://us-central1-mapeamento-cultural.cloudfunctions.net/api";

export const axiosInstance = Axios.create({
  ...Axios.defaults,
  baseURL: baseURL,
});


export const agentColumns: DatagridColumns[] = [
  { field: "privateMail", title: "E-mail de cadastro" },
  { field: "publicEmail", title: "E-mail público" },
  { field: "agentType", title: "Tipo de agente" },
  { field: "fullNamePrivate", title: "Nome completo" },
  {
    field: "fullNamePublic",
    title: "Nome público",
    hidden: true,
  },
  {
    field: "birthday_or_founding",
    title: "Data de nascimento/fundação",
    hidden: true,
  },
  {
    field: "race",
    title: "Raça/cor",
    hidden: true,
  },
  {
    field: "categories",
    title: "Categorias",
    hidden: true,
  },
  {
    field: "professionalRecord",
    title: "Registro profissional",
    hidden: true,
  },
  {
    field: "description",
    title: "Descrição pessoal",
    hidden: true,
  },
  {
    field: "youtube",
    title: "Youtube",
    hidden: true,
  },
  {
    field: "instagram",
    title: "Instagram",
    hidden: true,
  },
  {
    field: "privatePhone",
    title: "Telefone privado",
    hidden: true,
  },
  {
    field: "publicPhone",
    title: "Telefone público",
    hidden: true,
  },
]

export const eventColumns: DatagridColumns[] = [

  {
    field: "uuid",
    title: "ID",
    hidden: true
  },
  {
    field: 'privateEmail',
    title: 'E-mail privado',
  },
  {
    field: 'publicEmail',
    title: 'Email público'
  },
  {
    field: 'eventName',
    title: 'Nome do evento'
  },
  {
    field: "eventDescription",
    title: "Descrição do evento",
    hidden: true
  },
  {
    field: "eventEntry",
    title: 'Tipo de entrada'
  },
  {
    field: 'startingDate',
    title: "Data de início"
  },
  {
    field: "endingDate",
    title: "Data do término"
  },
  {
    field: "openingHours",
    title: "Horário de abertura",
    hidden: true
  },
  {
    field: "closingHours",
    title: 'Horário de fechamento',
    hidden: true
  },
  {
    field: "eventAddress",
    title: "Endereço",
    hidden: true,
  },
  {
    field: "eventAgeRestriction",
    title: 'Restrição de idade',
    hidden: true,
  },
  {
    field: "eventFrequency",
    title: "Frequência do evento",
    hidden: true,
  },
  {
    field: "websiteURL",
    title: "Website",
    hidden: true,
  },
  {
    field: "eventFacebookURL",
    title: "Facebook do evento",
    hidden: true,
  },
  {
    field: "contactPhone",
    title: "Telefone para contato",
    hidden: true,
  },
  {
    field: "eventHead",
    title: "Responsável pelo evento",
    hidden: true,
  }

]

export const spaceColumns: DatagridColumns[] = [
  {
    field: 'uuid',
    title: 'uuid',
    hidden: true,
  },
  {
    field: 'publicEmail',
    title: 'E-mail público'
  },
  {
    field: 'culturalSpaceName',
    title: 'Nome do espaço',
  },
  {
    field: 'culturalSpaceCategory',
    title: 'Categorias',
    hidden: true,
  },
  {
    field: "culturalSpaceDescription",
    title: "Descrição",
    hidden: true,
  },
  {
    field: "culturalSpaceEntry",
    title: 'Tipo de acesso'
  },
  {
    field: "culturalSpaceSphere",
    title: 'Esfera',
    hidden: false,
  },
  {
    field: 'accessible',
    title: 'Acessível',
    hidden: true,
  },
  {
    field: "accessibilityType",
    title: 'Tipo de acessibilidade',
    hidden: true,
  },
  {
    field: 'culturalSpaceCapacity',
    title: 'Capacidade do espaço',
    hidden: true,
  },
  {
    field: "openingHours",
    title: "Horário de abertura",
    hidden: true,
  },
  {
    field: "closingHours",
    title: "Horário de fechamento",
    hidden: true,
  },
  {
    field: 'website',
    title: "Website",
    hidden: true
  },
  {
    field: "facebook",
    title: "Facebook",
    hidden: true,
  }, 
  {
    field: "instagram",
    title: "Instagram",
    hidden: true,
  },
  {
    field: "contactNumber",
    title: 'Número para contato',
    hidden: false
  },
  {
    field: "publicPhone",
    title: "Número público"
  },
  {
    field: "publicPhoneAdditional",
    title: "Número público adicional",
    hidden: true,
  },
  {
    field: "entryType",
    title: "Tipo de entrada",
    hidden: true,
  }
]