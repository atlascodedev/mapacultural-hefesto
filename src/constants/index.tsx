import { Chip } from "@material-ui/core";
import Axios from "axios";
import {
  IAgentModelAPIData,
  ICulturalSpaceAPIData,
  IEventModelAPIData,
} from "../@types/project";
import { DatagridColumns } from "../components/DataCreation";
import ConnectedButton from "../components/MapDialog/ConnectedButton";
import LocalizeConnectedButton from "../components/MapLocalizationDialog/LocalizeConnectedButton";
import { MapDialogFields } from "../redux/mapDialog/types";

const baseURL: string =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5001/mapeamento-cultural/us-central1/api"
    : "https://us-central1-mapeamento-cultural.cloudfunctions.net/api";

export const API = Axios.create({
  ...Axios.defaults,
  baseURL: baseURL,
});

export const agentColumns: DatagridColumns<
  IAgentModelAPIData & { view: any }
>[] = [
  { field: "lat", title: "Latitude", hidden: true },
  { field: "lng", title: "Longitude", hidden: true },
  { field: "registrationEmail", title: "E-mail de cadastro" },
  { field: "publicEmail", title: "E-mail público", hidden: true },
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
    hidden: true,
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
    hidden: true,
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
    render: (rowData: IAgentModelAPIData) => {
      if (rowData.status === "ANÁLISE") {
        return (
          <Chip
            label="Em análise"
            clickable
            style={{
              backgroundColor: "#FF9800",
              color: "white",
              fontWeight: 500,
            }}
          />
        );
      } else if (rowData.status === "NEGADO") {
        return (
          <Chip
            label="Reprovado"
            clickable
            style={{
              backgroundColor: "#F44336",
              color: "#fff",
              fontWeight: 500,
            }}
          />
        );
      } else {
        return (
          <Chip
            label="Aprovado"
            clickable
            style={{
              backgroundColor: "#2CD283",
              color: "#FFF",
              fontWeight: 500,
            }}
          />
        );
      }
    },
  },
  {
    field: "view",
    title: "",
    render: (rowData: IAgentModelAPIData & { uuid: string }) => {
      let fieldsInternal: MapDialogFields[] = [
        { value: rowData.agentType, label: "Tipo de agente" },
        { value: rowData.fullName, label: "Nome completo" },
        {
          value: new Date(rowData.birthday_or_founding).toLocaleDateString(
            "pt-br"
          ),
          label: "Data de nascimento/fundação",
        },
        {
          value: rowData.categories.map((value, index) => {
            return <div key={index}> {value} </div>;
          }),
          label: "Categorias",
        },
        {
          value: rowData.cep,
          label: "CEP",
        },
        {
          value: rowData.complement,
          label: "Complemento",
        },
        {
          value: rowData.cpf_or_cnpj,
          label: "CPF/CNPJ",
        },
        {
          value: rowData.neighborhood,
          label: "Bairro",
        },
        {
          value: rowData.street,
          label: "Logradouro",
        },
        {
          value: rowData.streetNumber,
          label: "Número",
        },
        {
          value: rowData.registrationEmail,
          label: "E-mail de cadastro",
        },
        {
          value: rowData.publicEmail,
          label: "E-mail público",
        },
        {
          value: rowData.facebook,
          label: "Facebook",
        },
        {
          value: rowData.instagram,
          label: "Instagram",
        },
        {
          value: rowData.website,
          label: "Website",
        },
        {
          value: rowData.phoneNumber,
          label: "Número de telefone",
        },
        {
          value: rowData.professionalRecord,
          label: "Registro profissional",
        },
        {
          value: rowData.race,
          label: "Raça/cor",
        },
        {
          value: rowData.gender,
          label: "Gênero/orientação sexual",
        },
        {
          value: rowData.lat,
          label: "Latitude",
        },
        {
          value: rowData.lng,
          label: "Longitude",
        },
        {
          value: rowData.description,
          label: "Descrição",
        },
      ];

      return (
        <ConnectedButton
          resourceUUID={rowData.uuid}
          resourceEmail={rowData.registrationEmail}
          resourceName={"Agente cultural"}
          fieldsData={fieldsInternal}
          resourceCollection="agent"
        />
      );
    },
  },
];

export const spaceColumns: DatagridColumns<
  ICulturalSpaceAPIData & { view: any; localize: any }
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
    render: (rowData: IAgentModelAPIData) => {
      if (rowData.status === "ANÁLISE") {
        return (
          <Chip
            label="Em análise"
            clickable
            style={{
              backgroundColor: "#FF9800",
              color: "white",
              fontWeight: 500,
            }}
          />
        );
      } else if (rowData.status === "NEGADO") {
        return (
          <Chip
            label="Reprovado"
            clickable
            style={{
              backgroundColor: "#F44336",
              color: "#fff",
              fontWeight: 500,
            }}
          />
        );
      } else {
        return (
          <Chip
            label="Aprovado"
            clickable
            style={{
              backgroundColor: "#2CD283",
              color: "#FFF",
              fontWeight: 500,
            }}
          />
        );
      }
    },
  },
  {
    field: "localize",
    title: "",
    render: (rowData: ICulturalSpaceAPIData & { uuid: string }) => {
      return <LocalizeConnectedButton resourceUUID={rowData.uuid} />;
    },
  },
  {
    field: "view",
    title: "",
    render: (rowData: ICulturalSpaceAPIData & { uuid: string }) => {
      let fieldsInternal: MapDialogFields[] = [
        { value: rowData.culturalSpaceName, label: "Nome do espaço cultural" },
        { value: rowData.culturalSpaceSphere, label: "Esfera" },
        { value: rowData.accessibilityType, label: "Tipo de acessibilidade" },
        { value: rowData.accessible, label: "Acessível" },
        {
          label: "Segmentos culturais",
          value: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {rowData.category.map((category, index) => {
                return <div key={index}>{category} </div>;
              })}
            </div>
          ),
        },
        {
          value: rowData.cep,
          label: "CEP",
        },
        {
          value: rowData.complement,
          label: "Complemento",
        },
        {
          value: rowData.cpf_or_cpnj,
          label: "CPF/CNPJ",
        },
        {
          value: rowData.culturalSpaceCapacity,
          label: "Capacidade do local",
        },
        {
          value: rowData.culturalSpaceEntry,
          label: "Tipo de espaço",
        },
        {
          value: rowData.culturalSpaceHead,
          label: "Nome do responsável",
        },
        {
          value: rowData.description,
          label: "Descrição",
        },
        {
          value: rowData.entryFee,
          label: "Taxa de entrada",
        },
        {
          value: rowData.entryTypes,
          label: "Tipo de entrada",
        },
        {
          value: rowData.facebook,
          label: "Facebook",
        },
        {
          value: rowData.instagram,
          label: "Instagram",
        },
        {
          value: rowData.lat,
          label: "Latitude",
        },
        {
          value: rowData.lng,
          label: "Longitude",
        },
        {
          value: rowData.neighborhood,
          label: "Bairro",
        },
        {
          value: rowData.privateEmail,
          label: "E-mail de cadastro",
        },
        {
          value: rowData.privatePhone,
          label: "Telefone de cadastro",
        },
        {
          value: rowData.publicEmail,
          label: "E-mail público",
        },
        {
          value: rowData.publicPhone,
          label: "Telefone público",
        },
        {
          value: rowData.publicPhoneAlt,
          label: "Telefone público 2",
        },
        {
          value: rowData.status,
          label: "Status",
        },
        {
          value: rowData.street,
          label: "Logradouro",
        },
        {
          value: rowData.streetNumber,
          label: "Número da rua",
        },
        {
          value: rowData.website,
          label: "Website",
        },
        {
          value: rowData.workingHours,
          label: "Horário de funcionamento",
        },
      ];

      return (
        <ConnectedButton
          fieldsData={fieldsInternal}
          resourceCollection={"space"}
          resourceEmail={rowData.privateEmail}
          resourceName={"Espaços culturais"}
          resourceUUID={rowData.uuid}
        />
      );
    },
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
  {
    field: "status",
    title: "Status",
    render: (rowData: IAgentModelAPIData) => {
      if (rowData.status === "ANÁLISE") {
        return (
          <Chip
            label="Em análise"
            clickable
            style={{
              backgroundColor: "#FF9800",
              color: "white",
              fontWeight: 500,
            }}
          />
        );
      } else if (rowData.status === "NEGADO") {
        return (
          <Chip
            label="Reprovado"
            clickable
            style={{
              backgroundColor: "#F44336",
              color: "#fff",
              fontWeight: 500,
            }}
          />
        );
      } else {
        return (
          <Chip
            label="Aprovado"
            clickable
            style={{
              backgroundColor: "#2CD283",
              color: "#FFF",
              fontWeight: 500,
            }}
          />
        );
      }
    },
  },
  {
    field: "view",
    title: "",
    render: (rowData: IEventModelAPIData & { uuid: string }) => {
      let fieldsInternal: MapDialogFields[] = [
        {
          value: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {rowData.categories.map((category, index) => {
                return <div key={index}> {category} </div>;
              })}
            </div>
          ),
          label: "Categorias",
        },
        {
          value: rowData.cep,
          label: "CEP",
        },
        {
          value: rowData.complement,
          label: "Complemento",
        },
        {
          value: rowData.description,
          label: "Descrição",
        },
        {
          value: rowData.endingDate,
          label: "Data do encerramento",
        },
        {
          value: rowData.startingDate,
          label: "Data de início",
        },
        {
          value: rowData.eventAgeRestriction,
          label: "Faixa etária",
        },
        {
          value: rowData.eventEntryType,
          label: "Tipo de entrada",
        },
        {
          value: rowData.eventFee,
          label: "Valor da entrada",
        },
        {
          value: rowData.eventFrequency,
          label: "Frequência do evento",
        },
        {
          value: rowData.eventHead,
          label: "Responsável do evento",
        },
        {
          value: rowData.eventName,
          label: "Nome do evento",
        },
        {
          value: rowData.eventType,
          label: "Tipo de evento",
        },
        {
          value: rowData.eventURL,
          label: "Link do evento (virtual)",
        },
        {
          value: rowData.lat,
          label: "Latitude",
        },
        {
          value: rowData.lng,
          label: "Longitude",
        },
        {
          value: rowData.neighborhood,
          label: "Bairro",
        },
        {
          value: rowData.privateEmail,
          label: "E-mail de cadastro",
        },
        {
          value: rowData.privatePhone,
          label: "Telefone de cadastro",
        },
        {
          value: rowData.publicEmail,
          label: "E-mail público",
        },
        {
          value: rowData.publicPhone,
          label: "Telefone público",
        },
        {
          value: rowData.status,
          label: "Status",
        },
        {
          value: rowData.street,
          label: "Logradouro",
        },
        {
          value: rowData.streetNumber,
          label: "Número da rua",
        },
        {
          value: rowData.website,
          label: "Website",
        },
        {
          value: rowData.workingHours,
          label: "Horário de funcionamento",
        },
      ];

      return (
        <ConnectedButton
          fieldsData={fieldsInternal}
          resourceCollection={"event"}
          resourceEmail={rowData.privateEmail}
          resourceName={"Eventos"}
          resourceUUID={rowData.uuid}
        />
      );
    },
  },
];

export const AGENT_COLLECTION_REF = "agent";
export const EVENT_COLLECTION_REF = "event";
export const SPACE_COLLECTON_REF = "space";
