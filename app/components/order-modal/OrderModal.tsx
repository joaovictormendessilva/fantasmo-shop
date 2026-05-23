import { emailService } from "@/client/services/email/email.service";
import { IOrderDto } from "@/server/services/email/emai.types";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useState } from "react";
import { ListCartItem } from "../app-header/popover-cart/list-cart-item";
import { IOrderFormValues, OrderModalProps } from "./OrderModal.types";

export function OrderModal({ cartItems, formattedTotalPrice, isOpen, onClose }: OrderModalProps) {
  const defaultValues: IOrderFormValues = {
    to: "",
    customerName: "",
    customerPhoneNumber: "",
  };

  const [formValues, setFormValues] = useState<IOrderFormValues>(defaultValues);
  const [isLoading, setIsLoading] = useState(false);

  const changeFormValues = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createPayload = (): IOrderDto => {
    return {
      to: formValues.to,
      customerName: formValues.customerName,
      customerPhoneNumber: formValues.customerPhoneNumber,
      products: cartItems,
    };
  };

  const handleSendEmail = async () => {
    setIsLoading(true);

    const payload: IOrderDto = createPayload();

    try {
      await emailService().sendOrderEmail(payload);
    } catch (error) {
      throw new Error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        px: "26px",
        backgroundColor: "#000000d1",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            py: "32px",
            px: "24px",
            maxHeight: "90vh",
            overflowY: "auto",

            "&::-webkit-scrollbar": {
              width: "8px",
            },

            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#c1c1c1",
              borderRadius: "999px",
            },

            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#a8a8a8",
            },
          }}
        >
          <Divider
            sx={{
              width: "48px",
              margin: "0 auto 32px auto",
              borderWidth: "2px",
              borderColor: "primary.main",
            }}
          />

          <Stack sx={{ gap: 2 }}>
            <Stack>
              <InputLabel>NOME</InputLabel>
              <TextField name="customerName" fullWidth size="small" onChange={changeFormValues} />
            </Stack>

            <Stack>
              <InputLabel>EMAIL</InputLabel>
              <TextField name="to" fullWidth size="small" onChange={changeFormValues} />
            </Stack>

            <Stack>
              <InputLabel>TELEFONE</InputLabel>
              <TextField name="customerPhoneNumber" fullWidth size="small" onChange={changeFormValues} />
            </Stack>

            <List>
              {cartItems.map((product) => (
                <ListCartItem key={product.id} product={product} />
              ))}

              <Divider />

              <ListItem sx={{ justifyContent: "space-between", py: 2 }}>
                <Typography>Total:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>{formattedTotalPrice}</Typography>
              </ListItem>
            </List>

            <Button variant="contained" onClick={handleSendEmail} loading={isLoading}>
              Enviar Email
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Modal>
  );
}
