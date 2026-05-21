import { API_ENDPOINTS } from "./auth.endpoints";
import { ILoginDto, ILoginResponse, IErrorResponse } from "./auth.types";

export const authService = () => {
  const login = async (credentials: ILoginDto): Promise<ILoginResponse> => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData: IErrorResponse = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };

  const logout = async (): Promise<void> => {
    const response = await fetch(API_ENDPOINTS.LOGOUT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData: IErrorResponse = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };

  return {
    login,
    logout,
  };
};
