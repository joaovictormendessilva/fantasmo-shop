import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FilterProductsProps } from "./FilterProducts.types";

export function FilterProducts({ onHandleFilterProducts, resultsQuantity }: FilterProductsProps) {
  const options = [
    { label: "Todos", category_type: "all" },
    { label: "Eletrônicos", category_type: "eletronics" },
    { label: "Acessórios", category_type: "accessories" },
    { label: "Fotografia", category_type: "photos" },
    { label: "Setup", category_type: "setup" },
    { label: "Gadgets", category_type: "gadgets" },
  ];

  return (
    <Stack
      sx={{
        mt: "48px",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 0 },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Autocomplete
        sx={{ maxWidth: 250 }}
        fullWidth
        disablePortal
        options={options}
        defaultValue={options[0]}
        size="small"
        onChange={(_, value) => {
          onHandleFilterProducts(value?.category_type ?? "all");
        }}
        renderInput={(params) => <TextField {...params} label="Filtro" />}
      />

      <Typography color="textSecondary" sx={{ fontSize: 14 }}>
        Mostrando <b>{resultsQuantity}</b> resultados
      </Typography>
    </Stack>
  );
}
