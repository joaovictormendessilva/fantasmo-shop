import { LoginCard } from "@/app/components/login-card";
import Stack from "@mui/material/Stack";
import { WelcomeBanner } from "./components/welcome-banner";

export default function LoginPage() {
  return (
    <Stack sx={{ minHeight: "100vh", justifyContent: "center" }}>
      <WelcomeBanner />

      <LoginCard />
    </Stack>
  );
}
