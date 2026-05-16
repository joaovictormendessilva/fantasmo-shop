import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { LoginForm } from "../login-form";

export function LoginCard() {
  return (
    <Card
      sx={{
        px: "24px",
        py: "32px",
        maxWidth: "342px",
        width: "100%",
        margin: "40px auto",
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

      <LoginForm />
    </Card>
  );
}
