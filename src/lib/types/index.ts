interface ApiErrorData {
  message?: string;
  errors?: { message?: string }[];
}

export interface ApiErrorResponse {
  response?: {
    data?: ApiErrorData;
  };
}

export interface optionsType {
  label: string;
  value: string;
  color?: string;
}
