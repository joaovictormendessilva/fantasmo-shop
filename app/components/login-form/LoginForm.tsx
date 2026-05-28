"use client";

import { authService } from "@/client/services/auth/auth.service";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface ILoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const defaultValues: ILoginFormValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState<ILoginFormValues>(defaultValues);
  const router = useRouter();

  const changeFormValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      await authService().login({
        email: formValues.email,
        password: formValues.password,
      });

      router.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Stack sx={{ gap: 2 }}>
      <Stack>
        <InputLabel>E-MAIL</InputLabel>
        <TextField name="email" placeholder="Digite qualquer coisa..." size="small" onChange={changeFormValues} />
      </Stack>

      <Stack>
        <InputLabel>SENHA</InputLabel>
        <TextField name="password" placeholder="Digite qualquer coisa..." size="small" onChange={changeFormValues} />
      </Stack>

      <Button variant="contained" onClick={handleLogin}>
        Entrar
      </Button>
    </Stack>
  );
}
