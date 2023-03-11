export interface IPhoneMask {
  textmask: string;
}

export interface IPhoneProps {
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
}

export interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IPropsLogin {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IDepartNP {
  Description: string;
}

export interface ILocal {
  label: string;
  Ref: string;
  Description: string;
  AreaDescription: string;
  SettlementTypeDescription: string;
}

export interface IPropsNovaPoshta {
  locality: ILocal | null;
  setLocality: (value: ILocal | null) => void;
  department: string;
  setDepartment: (value: string) => void;
}

export interface IPropsUkrPoshta extends IPropsNovaPoshta {
  delivery: string | null;
}

export interface ISearchLocality {
  locality: ILocal | null;
  setLocality: (value: ILocal | null) => void;
  search: string;
  setSearch: (value: string) => void;
  locals: ILocal[];
  setDepartment: (value: string) => void;
}

export interface IPropsDelivery extends IPropsUkrPoshta {
  setDelivery: (value: string | null) => void;
}

export interface IPropsRegister extends IPropsDelivery {
  name: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
  navigate: (to: string) => void;
  setForm: (value: boolean) => void;
}

export interface IAuthState {
  user: IUser;
  isLogged: boolean;
  // isLoading: boolean;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  phone: string;
  name: string;
  delivery: string;
  locality: string;
  department: string;
}

export interface IUser extends ILoginData {
  id: number | null;
  //   email?: string;
  //   createdAt?: string;
}
