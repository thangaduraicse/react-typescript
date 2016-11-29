export type Zipcode = {
  zipcode?: string;
  neighborhood?: string;
  locality?: string;
  city?: string;
  state?: string;
  country?: string;
};

export type Zipcodes = Zipcode[];

export type Addr = {
  types?: string;
  long_name?: string;
};

export type IState = {
  addresses?: Zipcode;
  fetchZipcodeErrorMessage?: string;
  searchHistory?: Zipcodes
};
