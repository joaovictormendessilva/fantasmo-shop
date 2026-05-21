export interface ILoginDto {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
}

export interface IErrorResponse {
  message: string;
}
