import { transporter } from "@/server/utils/transporter";
import { render } from "@react-email/render";
import { IOrderDto } from "./emai.types";
import { OrderEmail } from "./templates/order-email";

export const emailService = () => {
  const sendOrderEmail = async ({ to, customerName, customerPhoneNumber, products }: IOrderDto) => {
    const html = await render(
      OrderEmail({
        customerEmail: to,
        customerName,
        customerPhoneNumber,
        products,
      }),
    );

    await transporter.sendMail({
      from: `"Fantasmo Shop" <${process.env.SMTP_USER}>`,
      to,
      subject: "Pedido confirmado em Fantasmo Shop!",
      html,
    });
  };

  return {
    sendOrderEmail,
  };
};
