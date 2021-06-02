import { IconTypes, FormFieldTypes } from "../dictionaries/types";

export interface FieldGroup {
  id: string;
  label: string;
}

export type DashboardItemCategory = "creation" | "visualization";

export interface DashboardItemRoot {
  itemID: string;
  routerPath: string;
  sidebarLabel: string;
  sidebarIcon: IconTypes;
  itemCategory: DashboardItemCategory;
}

export interface RadioField {
  value: string;
  label: string;
}

export interface CheckboxField extends RadioField {}

export interface DataCreationField {
  fieldType: FormFieldTypes;
  label: string;
  initialValue?: string | Array<string>;
  selectOptions?: Array<string>;
  radioOptions?: Array<RadioField>;
  checkboxOptions?: Array<CheckboxField>;
  listOptions?: ListFieldOptions;
  hidden?: boolean;
  private?: boolean;
  required?: boolean;
  currencyPrefix?: string;
  slug?: boolean;
  groupID?: string;
  name: string;
}

export interface ListFieldOptions {
  label: string;
  fieldLabel: string;
  min?: number;
  max?: number;
}

export interface DataCreationItem extends DashboardItemRoot {
  collectionRef: string;
  fields: Array<DataCreationField>;
  attributesFields?: Array<AttributeCollectionField>;
  hasCategories?: boolean | null;
  hasAttributes?: boolean | null;
  fieldGroups?: FieldGroup[];
  showID?: boolean;
  noEdit?: boolean;
}

export interface Attribute {
  label: string;
  name: string;
  attributeValues: Array<string>;
}

export interface AttributeCollectionField {
  label: string;
  name: string;
}

export interface Category {
  uuid: string;
  root?: boolean;
  label: string;
  parent: string | null | undefined;
  uuid_path: Array<string>;
  label_path?: Array<string>;
}

export type DashboardItem = DataCreationItem;

const partnersCollection: DashboardItem = {
  collectionRef: "partners",
  itemCategory: "creation",
  itemID: "partnerID",
  routerPath: "parceiros",
  sidebarIcon: "MoreHoriz",
  sidebarLabel: "Parceiro",
  fieldGroups: [{ id: "partnerInfo", label: "Informações" }],
  fields: [
    {
      fieldType: "string",
      label: "Nome do parceiro",
      name: "partnerName",
      groupID: "partnerInfo",
    },
    {
      fieldType: "image",
      label: "Logo do parceiro",
      name: "partnerLogo",
      groupID: "partnerInfo",
      hidden: true,
    },
  ],
};

export const collections: Array<DashboardItem> = [partnersCollection];
