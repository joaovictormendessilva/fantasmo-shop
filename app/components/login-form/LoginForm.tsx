import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export function LoginForm() {
  return (
    <Stack sx={{ gap: 2 }}>
      <Stack>
        <InputLabel>E-MAIL</InputLabel>
        <TextField size="small" />
      </Stack>

      <Stack>
        <InputLabel>SENHA</InputLabel>
        <TextField size="small" />
      </Stack>

      <Button variant="contained">Entrar</Button>
    </Stack>
  );
}
