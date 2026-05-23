import { IOrderDto } from "@/server/services/email/emai.types";
import { emailService } from "@/server/services/email/email.service";

export async function POST(req: Request) {
  try {
    const body: IOrderDto = await req.json();

    await emailService().sendOrderEmail(body);

    return Response.json({
      success: true,
    });
  } catch {
    return Response.json(
      {
        message: "Erro ao enviar email",
      },
      {
        status: 500,
      },
    );
  }
}
