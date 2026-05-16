import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Ghost } from "lucide-react";

export function WelcomeBanner() {
  return (
    <Box>
      <Stack sx={{ alignItems: "center" }}>
        <Box
          sx={{
            height: 72,
            width: 72,
            borderRadius: "50%",
            backgroundColor: "#F3F4F6FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ghost
            size={46}
            style={{
              color: "#131313",
            }}
          />
        </Box>

        <Typography sx={{ fontSize: 20, fontWeight: "bold", mt: "16px" }}>Bem-vindo de volta</Typography>
        <Typography color="textSecondary" sx={{ fontSize: 14, maxWidth: 220, textAlign: "center" }}>
          Acesse sua conta para explorar coleções exclusivas.
        </Typography>
      </Stack>
    </Box>
  );
}
