export interface weekCardDetails {
  temp: string | number;
  date: string;
  icon: string;
  unit?: string;
}

export interface currTempDeatils {
  city: string;
  country: string;
  temperature: string | number;
  feels: string | number;
  desc: string;
  icon: string;
  unitSystem: string;
}

export interface cardDtails {
  mainHeading: string;
  number: string | number;
  unit?: string;
  icon: string;
}
