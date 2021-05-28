import {
  AgeRestrictionTypes,
  CulturalCategoryTypes,
  CulturalSpaceAcessibilityType,
  CulturalSpaceEntranceType,
  CulturalSpaceEntryTypes,
  CulturalSpaceSphereTypes,
  EventFrequencyTypes,
  GenderTypes,
  RaceTypes,
} from "./literals";

export interface ICulturalSpacePersonalInfo {
  privateEmail: string;
  publicEmail: string;
  culturalSpaceName: string;
  culturalSpaceHead: string;
  cpf_or_cpnj: string;
  culturalSpaceEntry: CulturalSpaceEntranceType;
  culturalSpaceSphere: CulturalSpaceSphereTypes;
  culturalSpaceCapacity: string;
  openingHours: string;
  closingHours: string;
  entryTypes: CulturalSpaceEntryTypes;
  description: string;
  entryFee?: string;
}

export interface ICulturalSpaceAddressInfo {
  cep: string;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  streetNumber: string;
  complement?: string;
}

export interface ICulturalSpaceCategories {
  category: CulturalCategoryTypes[];
  accessible: string;
  accessibilityType: CulturalSpaceAcessibilityType[];
}

export interface ICulturalSpaceSocials {
  website?: string;
  facebook?: string;
  instagram?: string;
  privatePhone: string;
  publicPhone?: string;
  publicPhoneAlt?: string;
}

export type ICulturalSpaceModel = ICulturalSpacePersonalInfo &
  ICulturalSpaceAddressInfo &
  ICulturalSpaceCategories &
  ICulturalSpaceSocials;

export interface IAgentPersonalInfo {
  agentType: string;
  registrationEmail: string;
  publicEmail: string;
  fullName: string;
  publicName: string;
  birthday_or_founding: string;
  cpf_or_cnpj: string;
  gender: GenderTypes;
  race: RaceTypes;
  professionalRecord: string;
}

export interface IAgentAddressInfo {
  cep: string;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  streetNumber: string;
  complement?: string;
}

export interface IAgentSocialInfo {
  website?: string;
  facebook?: string;
  instagram?: string;
  phoneNumber: string;
  publicPhoneNumber?: string;
  portfolio?: string;
}

export interface IAgentCategories {
  categories: CulturalCategoryTypes;
}

export type IAgentModel = IAgentPersonalInfo &
  IAgentAddressInfo &
  IAgentSocialInfo &
  IAgentCategories;

export interface IEventPersonalInfo {
  privateEmail: string;
  publicEmail?: string;
  eventName: string;
  eventHead: string;
  openingHours: string;
  closingHours: string;
  startingDate: string;
  eventAgeRestriction: AgeRestrictionTypes;
  eventFrequency: EventFrequencyTypes;
  description: string;
  eventEntryType: CulturalSpaceEntryTypes;
  eventFee?: string;
}

export interface IEventCategories {
  categories: CulturalCategoryTypes;
}

export interface IEventAddressInfo {
  eventType: string;
  cep?: string;
  street?: string;
  city?: string;
  state?: string;
  neighborhood?: string;
  streetNumber?: string;
  complement?: string;
}

export interface IEventSocialsInfo {
  website?: string;
  eventURL?: string;
  privatePhone: string;
  publicPhone?: string;
}

export type IEventModel = IEventSocialsInfo &
  IEventCategories &
  IEventAddressInfo &
  IEventSocialsInfo;

export interface IAgentModelAPIData extends IAgentModel {
  lat: string;
  long: string;
  status: any;
}

export interface IEventModelAPIData extends IEventModel {
  lat: string;
  long: string;
  status: any;
}

export interface ICulturalSpaceAPIData extends ICulturalSpaceModel {
  lat: string;
  long: string;
  status: any;
}