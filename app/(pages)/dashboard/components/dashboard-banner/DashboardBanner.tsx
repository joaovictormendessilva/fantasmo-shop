import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { DEFAULT_COLORS } from "@/app/theme";

export function DashboardBanner() {
  return (
    <Card sx={{ p: "65px" }}>
      <Typography
        sx={{
          fontSize: 48,
          display: "flex",
          fontWeight: "bold",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "569px",
          lineHeight: "48px",
          gap: 1,
        }}
      >
        A nova Era da
        <span
          style={{
            color: DEFAULT_COLORS.primary_main,
            fontStyle: "italic",
            fontWeight: "inherit",
            fontSize: "inherit",
          }}
        >
          Tecnologia
        </span>
        Chegou.
      </Typography>
      <Typography color="textSecondary" sx={{ mt: "24px", fontSize: 18 }}>
        Explore nossa curadoria de dispositivos premium projetados para elevar seu estilo de vida digital. Qualidade
        inigualável com a estética Aura.
      </Typography>

      <Button variant="contained" sx={{ mt: "32px" }}>
        Explorar Ofertas
      </Button>
    </Card>
  );
}
