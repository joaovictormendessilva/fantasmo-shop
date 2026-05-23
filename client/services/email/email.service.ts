import { IOrderDto } from "@/server/services/email/emai.types";
import { API_ENDPOINTS } from "./email.endpoints";

export const emailService = () => {
  const sendOrderEmail = async (data: IOrderDto) => {
    const response = await fetch(API_ENDPOINTS.ORDER, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar email");
    }

    return response.json();
  };

  return { sendOrderEmail };
};
