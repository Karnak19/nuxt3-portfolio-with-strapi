export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  PageSectionsDynamicZoneInput: any;
};

export type Error = {
  __component?: "Error";
  code: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  total: Scalars["Int"];
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  pageCount: Scalars["Int"];
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type IdFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  or?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  not?: Maybe<IdFilterInput>;
  eq?: Maybe<Scalars["ID"]>;
  ne?: Maybe<Scalars["ID"]>;
  startsWith?: Maybe<Scalars["ID"]>;
  endsWith?: Maybe<Scalars["ID"]>;
  contains?: Maybe<Scalars["ID"]>;
  notContains?: Maybe<Scalars["ID"]>;
  containsi?: Maybe<Scalars["ID"]>;
  notContainsi?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  gte?: Maybe<Scalars["ID"]>;
  lt?: Maybe<Scalars["ID"]>;
  lte?: Maybe<Scalars["ID"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  between?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type BooleanFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  not?: Maybe<BooleanFilterInput>;
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  startsWith?: Maybe<Scalars["Boolean"]>;
  endsWith?: Maybe<Scalars["Boolean"]>;
  contains?: Maybe<Scalars["Boolean"]>;
  notContains?: Maybe<Scalars["Boolean"]>;
  containsi?: Maybe<Scalars["Boolean"]>;
  notContainsi?: Maybe<Scalars["Boolean"]>;
  gt?: Maybe<Scalars["Boolean"]>;
  gte?: Maybe<Scalars["Boolean"]>;
  lt?: Maybe<Scalars["Boolean"]>;
  lte?: Maybe<Scalars["Boolean"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type StringFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["String"]>>>;
  or?: Maybe<Array<Maybe<Scalars["String"]>>>;
  not?: Maybe<StringFilterInput>;
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  notContains?: Maybe<Scalars["String"]>;
  containsi?: Maybe<Scalars["String"]>;
  notContainsi?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  between?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type IntFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  not?: Maybe<IntFilterInput>;
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  startsWith?: Maybe<Scalars["Int"]>;
  endsWith?: Maybe<Scalars["Int"]>;
  contains?: Maybe<Scalars["Int"]>;
  notContains?: Maybe<Scalars["Int"]>;
  containsi?: Maybe<Scalars["Int"]>;
  notContainsi?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type FloatFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  or?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  not?: Maybe<FloatFilterInput>;
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  startsWith?: Maybe<Scalars["Float"]>;
  endsWith?: Maybe<Scalars["Float"]>;
  contains?: Maybe<Scalars["Float"]>;
  notContains?: Maybe<Scalars["Float"]>;
  containsi?: Maybe<Scalars["Float"]>;
  notContainsi?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  between?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type DateTimeFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  or?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  not?: Maybe<DateTimeFilterInput>;
  eq?: Maybe<Scalars["DateTime"]>;
  ne?: Maybe<Scalars["DateTime"]>;
  startsWith?: Maybe<Scalars["DateTime"]>;
  endsWith?: Maybe<Scalars["DateTime"]>;
  contains?: Maybe<Scalars["DateTime"]>;
  notContains?: Maybe<Scalars["DateTime"]>;
  containsi?: Maybe<Scalars["DateTime"]>;
  notContainsi?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  between?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
};

export type JsonFilterInput = {
  and?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  or?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  not?: Maybe<JsonFilterInput>;
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  startsWith?: Maybe<Scalars["JSON"]>;
  endsWith?: Maybe<Scalars["JSON"]>;
  contains?: Maybe<Scalars["JSON"]>;
  notContains?: Maybe<Scalars["JSON"]>;
  containsi?: Maybe<Scalars["JSON"]>;
  notContainsi?: Maybe<Scalars["JSON"]>;
  gt?: Maybe<Scalars["JSON"]>;
  gte?: Maybe<Scalars["JSON"]>;
  lt?: Maybe<Scalars["JSON"]>;
  lte?: Maybe<Scalars["JSON"]>;
  null?: Maybe<Scalars["Boolean"]>;
  notNull?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  between?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
};

export type ComponentSectionCard = {
  __component?: "section.card";
  id: Scalars["ID"];
  fullName?: Maybe<Scalars["String"]>;
  avatar?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSectionContactForm = {
  __component?: "section.stack";
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionStack = {
  __component?: "section.stack";
  id: Scalars["ID"];
  items?: Maybe<TechnoRelationResponseCollection>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionStackItemsArgs = {
  filters?: Maybe<TechnoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publicationState?: Maybe<PublicationState>;
};

export type UploadFileFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  alternativeText?: Maybe<StringFilterInput>;
  caption?: Maybe<StringFilterInput>;
  width?: Maybe<IntFilterInput>;
  height?: Maybe<IntFilterInput>;
  formats?: Maybe<JsonFilterInput>;
  hash?: Maybe<StringFilterInput>;
  ext?: Maybe<StringFilterInput>;
  mime?: Maybe<StringFilterInput>;
  size?: Maybe<FloatFilterInput>;
  url?: Maybe<StringFilterInput>;
  previewUrl?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  provider_metadata?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  not?: Maybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  mime?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  url?: Maybe<Scalars["String"]>;
  previewUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  provider_metadata?: Maybe<Scalars["JSON"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  code?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  or?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  not?: Maybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: Maybe<IdFilterInput>;
  action?: Maybe<StringFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: Maybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  permissions?: Maybe<UsersPermissionsPermissionFiltersInput>;
  users?: Maybe<UsersPermissionsUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  not?: Maybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: Maybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: Maybe<IdFilterInput>;
  username?: Maybe<StringFilterInput>;
  email?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  password?: Maybe<StringFilterInput>;
  resetPasswordToken?: Maybe<StringFilterInput>;
  confirmationToken?: Maybe<StringFilterInput>;
  confirmed?: Maybe<BooleanFilterInput>;
  blocked?: Maybe<BooleanFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  not?: Maybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type PageSectionsDynamicZone =
  | ComponentSectionCard
  | ComponentSectionContactForm
  | ComponentSectionStack
  | Error;

export type PageFiltersInput = {
  id?: Maybe<IdFilterInput>;
  title?: Maybe<StringFilterInput>;
  slug?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<PageFiltersInput>>>;
  or?: Maybe<Array<Maybe<PageFiltersInput>>>;
  not?: Maybe<PageFiltersInput>;
};

export type PageInput = {
  title?: Maybe<Scalars["String"]>;
  sections?: Maybe<Array<Scalars["PageSectionsDynamicZoneInput"]>>;
  slug?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
};

export type Page = {
  __typename?: "Page";
  title?: Maybe<Scalars["String"]>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  slug?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
};

export type PageEntity = {
  __typename?: "PageEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Page>;
};

export type PageEntityResponse = {
  __typename?: "PageEntityResponse";
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: "PageEntityResponseCollection";
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type TechnoFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  desc?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<TechnoFiltersInput>>>;
  or?: Maybe<Array<Maybe<TechnoFiltersInput>>>;
  not?: Maybe<TechnoFiltersInput>;
};

export type TechnoInput = {
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["ID"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
};

export type Techno = {
  __typename?: "Techno";
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  logo?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
};

export type TechnoEntity = {
  __typename?: "TechnoEntity";
  id?: Maybe<Scalars["ID"]>;
  attributes?: Maybe<Techno>;
};

export type TechnoEntityResponse = {
  __typename?: "TechnoEntityResponse";
  data?: Maybe<TechnoEntity>;
};

export type TechnoEntityResponseCollection = {
  __typename?: "TechnoEntityResponseCollection";
  data: Array<TechnoEntity>;
  meta: ResponseCollectionMeta;
};

export type TechnoRelationResponseCollection = {
  __typename?: "TechnoRelationResponseCollection";
  data: Array<TechnoEntity>;
};

export type GenericMorph =
  | ComponentSectionCard
  | ComponentSectionContactForm
  | ComponentSectionStack
  | UploadFile
  | I18NLocale
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Page
  | Techno;

export type FileInfoInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"];
  username: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type PaginationArg = {
  page?: Maybe<Scalars["Int"]>;
  pageSize?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  techno?: Maybe<TechnoEntityResponse>;
  technos?: Maybe<TechnoEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryUploadFileArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: Maybe<I18NLocaleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: Maybe<UsersPermissionsRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type QueryPageArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryPagesArgs = {
  filters?: Maybe<PageFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryTechnoArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryTechnosArgs = {
  filters?: Maybe<TechnoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publicationState?: Maybe<PublicationState>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  createTechno?: Maybe<TechnoEntityResponse>;
  updateTechno?: Maybe<TechnoEntityResponse>;
  deleteTechno?: Maybe<TechnoEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"];
  data: UploadFileInput;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationCreatePageArgs = {
  data: PageInput;
};

export type MutationUpdatePageArgs = {
  id: Scalars["ID"];
  data: PageInput;
};

export type MutationDeletePageArgs = {
  id: Scalars["ID"];
};

export type MutationCreateTechnoArgs = {
  data: TechnoInput;
};

export type MutationUpdateTechnoArgs = {
  id: Scalars["ID"];
  data: TechnoInput;
};

export type MutationDeleteTechnoArgs = {
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  info?: Maybe<FileInfoInput>;
  file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: Maybe<FileInfoInput>;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
  data: UsersPermissionsRoleInput;
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars["ID"];
  data: UsersPermissionsUserInput;
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  code: Scalars["String"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};
