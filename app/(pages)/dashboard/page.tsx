import Box from "@mui/material/Box";
import { DashboardBanner } from "./components/dashboard-banner";
import { ProductsSection } from "./components/products-section";

export default function Dashboard() {
  return (
    <Box sx={{ px: "26px", py: "16px", maxWidth: "1230px", margin: "0 auto" }}>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <DashboardBanner />
      </Box>

      <ProductsSection />
    </Box>
  );
}
