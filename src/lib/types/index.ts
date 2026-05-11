interface ApiErrorData {
  message?: string;
  errors?: { message?: string }[];
}

export interface ApiErrorResponse {
  response?: {
    data?: ApiErrorData;
  };
}

export interface UserType {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  state: string;
  occupation: string;
  height: string;
  languages: string[];
  address: string;
  sponsor: string;
  certificate: string;
  participatedBefore: string;
  nameOfContest: string;
  wonBefore: string;
  titleWon: string;
}
