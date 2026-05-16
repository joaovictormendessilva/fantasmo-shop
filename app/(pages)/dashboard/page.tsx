"use client";

import { authService } from "@/app/services/auth/auth.service";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const logout = () => {
    authService().logout();
    router.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao dashboard!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
