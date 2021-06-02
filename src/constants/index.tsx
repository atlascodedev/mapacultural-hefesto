import Axios from "axios";
import {
  IAgentModelAPIData,
  ICulturalSpaceAPIData,
  IEventModelAPIData,
} from "../@types/project";
import { DatagridColumns } from "../components/DataCreation";

const baseURL: string =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001/mapeamento-cultural/us-central1/api"
    : "https://us-central1-mapeamento-cultural.cloudfunctions.net/api";

export const axiosInstance = Axios.create({
  ...Axios.defaults,
  baseURL: baseURL,
});

export const agentColumns: DatagridColumns<
  IAgentModelAPIData & { view: any }
>[] = [
  { field: "lat", title: "Latitude", hidden: true },
  { field: "lng", title: "Longitude", hidden: true },
  { field: "registrationEmail", title: "E-mail de cadastro" },
  { field: "publicEmail", title: "E-mail público" },
  {
    field: "agentType",
    title: "Tipo de agente",
  },
  {
    field: "birthday_or_founding",
    title: "Data de nascimento ou criação",
    hidden: true,
  },
  {
    field: "categories",
    title: "Categorias",
    hidden: true,
  },
  {
    field: "cep",
    title: "CEP",
    hidden: true,
  },

  {
    field: "complement",
    title: "Complemento",
    hidden: true,
  },
  {
    field: "cpf_or_cnpj",
    title: "CPF/CPNJ",
  },
  {
    field: "facebook",
    title: "Facebook",
    hidden: true,
  },
  {
    field: "fullName",
    title: "Nome completo",
  },
  {
    field: "gender",
    hidden: true,
    title: "Gênero",
  },
  {
    field: "instagram",
    hidden: true,
    title: "Instagram",
  },
  {
    field: "neighborhood",
    title: "Bairro",
  },
  {
    field: "phoneNumber",
    title: "Número de telefone",
    hidden: true,
  },
  {
    field: "portfolio",
    hidden: true,
    title: "Portfolio",
  },
  {
    field: "professionalRecord",
    hidden: true,
    title: "Registro profissional",
  },
  {
    field: "publicName",
    hidden: true,
    title: "Nome público",
  },
  {
    field: "publicPhoneNumber",
    hidden: true,
    title: "Número opcional 1",
  },
  {
    field: "race",
    hidden: true,
    title: "Raça",
  },

  {
    field: "street",
    title: "Logradouro",
    hidden: true,
  },
  {
    field: "streetNumber",
    title: "Número da rua",
    hidden: true,
  },
  {
    field: "website",
    title: "Website",
    hidden: true,
  },
  {
    field: "status",
    title: "Status",
  },
];

export const spaceColumns: DatagridColumns<
  ICulturalSpaceAPIData & { view: any }
>[] = [
  { field: "accessibilityType", title: "Tipo de acessibilidade", hidden: true },
  { field: "accessible", title: "Acessível", hidden: true },
  { field: "category", title: "Categorias", hidden: true },
  { field: "cep", title: "CEP" },
  { field: "complement", title: "Complemento", hidden: true },
  { field: "cpf_or_cpnj", title: "CPF/CPNJ", hidden: true },
  {
    field: "culturalSpaceCapacity",
    title: "Capacidade do espaço",
    hidden: true,
  },
  {
    field: "culturalSpaceEntry",
    title: "Entrada",
    hidden: true,
  },
  {
    field: "culturalSpaceHead",
    title: "Responsável pelo evento",
    hidden: true,
  },
  {
    field: "culturalSpaceName",
    title: "Nome do espaço",
  },
  {
    field: "culturalSpaceSphere",
    title: "Esfera",
    hidden: true,
  },
  {
    field: "description",
    hidden: true,
    title: "Descrição",
  },
  {
    field: "entryFee",
    title: "Taxa de entrada",
    hidden: true,
  },
  {
    field: "entryTypes",
    title: "Tipo de entrada",
    hidden: true,
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
  { field: "lat", title: "Latitude", hidden: true },
  { field: "lng", title: "Longitude", hidden: true },
  {
    field: "neighborhood",
    title: "Bairro",
    hidden: true,
  },

  {
    field: "privateEmail",
    title: "Email de cadastro",
    hidden: true,
  },
  {
    field: "privatePhone",
    title: "Telefone de cadastro",
    hidden: true,
  },
  {
    field: "publicEmail",
    title: "Email público",
    hidden: true,
  },
  {
    field: "publicPhone",
    title: "Telefone público",
    hidden: true,
  },
  {
    field: "publicPhoneAlt",
    title: "Telefone público alternativo",
    hidden: true,
  },

  {
    field: "street",
    title: "Logradouro",
    hidden: true,
  },
  {
    field: "streetNumber",
    title: "Número da rua",
    hidden: true,
  },
  {
    field: "website",
    title: "Website",
    hidden: true,
  },
  {
    field: "status",
    title: "Status",
  },
  {
    field: "view",
    title: "Ação",
  },
];

export const eventColumns: DatagridColumns<
  IEventModelAPIData & { view: any }
>[] = [
  { field: "categories", title: "Categorias", hidden: true },
  { field: "cep", title: "CEP" },
  { field: "complement", title: "Complemento", hidden: true },
  { field: "eventType", title: "Tipo de evento" },
  { field: "eventURL", title: "Site do evento", hidden: true },
  { field: "neighborhood", title: "Bairro", hidden: true },
  { field: "privatePhone", title: "Telefone para contato" },
  { field: "publicPhone", title: "Telefone opcional", hidden: true },
  { field: "street", title: "Logradouro", hidden: true },
  { field: "streetNumber", title: "Número da rua", hidden: true },
  { field: "website", title: "Website", hidden: true },
  { field: "lat", title: "Latitude", hidden: true },
  { field: "lng", title: "Longitude", hidden: true },
  { field: "status", title: "Status" },
  {
    field: "view",
    title: "Ação",
  },
];

export const AGENT_COLLECTION_REF = "agent";
export const EVENT_COLLECTION_REF = "event";
export const SPACE_COLLECTON_REF = "space";
