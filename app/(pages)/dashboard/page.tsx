import Box from "@mui/material/Box";
import { DashboardBanner } from "./components/dashboard-banner";
import { ProductsSection } from "./components/products-section";
import { AppHeader } from "@/app/components/app-header";

export default function Dashboard() {
  return (
    <>
      <AppHeader />

      <Box sx={{ px: "26px", py: "36px", maxWidth: "1230px", margin: "0 auto" }}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <DashboardBanner />
        </Box>

        <ProductsSection />
      </Box>
    </>
  );
}
